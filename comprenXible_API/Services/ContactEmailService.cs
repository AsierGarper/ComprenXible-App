using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using MimeKit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace comprenXible_API.Services
{
    public class ContactEmailService : IContactEmailService
    {
        private readonly EmailSettings _mailSettings;
        private Microsoft.AspNetCore.Hosting.IWebHostEnvironment _env;
        public ContactEmailService(IOptions<EmailSettings> mailSettings, Microsoft.AspNetCore.Hosting.IWebHostEnvironment env)
        {
            _mailSettings = mailSettings.Value;
            _env = env;
        }
       
        public async Task SendContactUsEmailAsync([FromBody] ContactUsEmail contactUsEmail)
        {
            var email = new MimeMessage();
            email.Sender = MailboxAddress.Parse(_mailSettings.Email);
            email.To.Add(MailboxAddress.Parse("mireitab@gmail.com"));
            email.To.Add(MailboxAddress.Parse("asiergarper@gmail.com"));
            email.To.Add(MailboxAddress.Parse("ortega.cabello.7@gmail.com"));
            email.Subject = $"Contacto a través de Comprenxible";
            var builder = new BodyBuilder();
            builder.HtmlBody = $"Nombre: {contactUsEmail.Name} Email: {contactUsEmail.EmailAddress} Mensaje: {contactUsEmail.Message}";
            email.Body = builder.ToMessageBody();
            using var smtp = new SmtpClient();
            smtp.Connect(_mailSettings.Host, _mailSettings.Port, SecureSocketOptions.StartTls);
            smtp.Authenticate(_mailSettings.Email, _mailSettings.Password);
            await smtp.SendAsync(email);
            smtp.Disconnect(true);
        }
    }
}
