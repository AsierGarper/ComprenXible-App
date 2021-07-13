using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;
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
        public EmailService(IOptions<EmailSettings> mailSettings)
        {
            _mailSettings = mailSettings.Value;
        }
        public async Task SendEmailAsync(EmailInfo emailInfo, double totalResults, string emailType)
        {
            var email = new MimeMessage();
            email.Sender = MailboxAddress.Parse(_mailSettings.Email);
            email.To.Add(MailboxAddress.Parse(emailInfo.EmailTo));
            var builder = new BodyBuilder();

            if (emailType == "no symptoms")
            {
                email.Subject = "Resultados Test";
                builder.HtmlBody = "No se aprecian rasgos depresivos.";
                email.Body = builder.ToMessageBody();
            }
            else if(emailType == "mild symptoms")
            {
                email.Subject = "Resultados Test";
                builder.HtmlBody = "Rasgos depresivos leves. Se recomienda consultar con un especialista.";
                email.Body = builder.ToMessageBody();
            }
            else
            {
                email.Subject = "Resultados Test";
                builder.HtmlBody = "" +
                    "<div>" +
                    "   <p>Rasgos depresivos severos.</p> " +
                    "   <p>Es necesaria la consulta urgente con un especialista.</p>" +
                    "</div>";
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

        public async Task SendEmailTemplateAsync(EmailSource emailSource)
        {
            string FilePath = Directory.GetCurrentDirectory() + "\\Templates\\CustomTemplate.html";
            StreamReader str = new StreamReader(FilePath);
            string MailText = str.ReadToEnd();
            str.Close();
            MailText = MailText.Replace("[username]", emailSource.UserName).Replace("[email]", emailSource.EmailTo);
            var email = new MimeMessage();
            email.Sender = MailboxAddress.Parse(_mailSettings.Email);
            email.To.Add(MailboxAddress.Parse(emailSource.EmailTo));
            email.Subject = $"Welcome {emailSource.UserName}";
            var builder = new BodyBuilder();
            builder.HtmlBody = MailText;
            email.Body = builder.ToMessageBody();
            using var smtp = new SmtpClient();
            smtp.Connect(_mailSettings.Host, _mailSettings.Port, SecureSocketOptions.StartTls);
            smtp.Authenticate(_mailSettings.Email, _mailSettings.Password);
            await smtp.SendAsync(email);
            smtp.Disconnect(true);
        }

    }
}
