using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using MimeKit;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace comprenXible_API.Services
{
    public class EmailService : IEmailService
    {
        private readonly EmailSettings _mailSettings;
        private Microsoft.AspNetCore.Hosting.IWebHostEnvironment _env;
        public EmailService(IOptions<EmailSettings> mailSettings, Microsoft.AspNetCore.Hosting.IWebHostEnvironment env)
        {
            _mailSettings = mailSettings.Value;
            _env = env;
        }
        public async Task SendEmailAsync(EmailInfo emailInfo, double totalResults, string resultType, string userName, string[] psychologistsInfo)
        {
                string psychologistsInfoString = "";
            if (psychologistsInfo.Length > 0)
            {
                foreach (var psychologist in psychologistsInfo)
                {
                    string[] array = JsonConvert.DeserializeObject<string[]>(psychologist);
                    psychologistsInfoString += $"<p><b>{ array[0]}</b><br/> { array[1]}</p><hr></hr>";
                }
            }


            var email = new MimeMessage();
            email.Sender = MailboxAddress.Parse(_mailSettings.Email);
            email.Subject = "Resultados Test - Comprenxible";
            email.To.Add(MailboxAddress.Parse(emailInfo.EmailTo));

            string templateType;
            if (resultType == "no symptoms")
            {
                templateType = "NoSymptomsEmail.html";
            }
            else if (resultType == "mild symptoms")
            {
                templateType = "MildSymptomsEmail.html";
            }
            else
            {
                templateType = "SevereSymptomsEmail.html";
            }

            //var emailTemplates = _env.WebRootPath;
            var pathToFile = _env.WebRootPath
                            + Path.DirectorySeparatorChar.ToString()
                            + templateType;

            var builder = new BodyBuilder();

            using (StreamReader SourceReader = File.OpenText(pathToFile))
            {
                builder.HtmlBody = SourceReader.ReadToEnd();
                if (psychologistsInfo.Length>0)
                {
                    builder.HtmlBody = builder.HtmlBody.Replace("$psychologistsNearYou$", "Estos son los psicólogos cerca de ti:");
                }
                else
                {
                    builder.HtmlBody = builder.HtmlBody.Replace("$psychologistsNearYou$", "");
                }
                builder.HtmlBody = builder.HtmlBody.Replace("$UserName$", userName);
                builder.HtmlBody = builder.HtmlBody.Replace("$psychologist$", psychologistsInfoString);
                email.Body = builder.ToMessageBody();
            }


            if (emailInfo.Attachments != null)
            {
                byte[] fileBytes;
                foreach (var file in emailInfo.Attachments)
                {
                    if (file.Length > 0)
                    {
                        using (var ms = new MemoryStream())
                        {
                            file.CopyTo(ms);
                            fileBytes = ms.ToArray();
                        }
                        builder.Attachments.Add(file.FileName, fileBytes, ContentType.Parse(file.ContentType));
                    }
                }
            }

            using var smtp = new SmtpClient();
            try
            {

                smtp.Connect(_mailSettings.Host, _mailSettings.Port, SecureSocketOptions.StartTls);
                smtp.Authenticate(_mailSettings.Email, _mailSettings.Password);
                await smtp.SendAsync(email);
                smtp.Disconnect(true);
            }
            catch (Exception _)
            {
                throw new Exception(_.Message);
            }
        }
        

    }
}
