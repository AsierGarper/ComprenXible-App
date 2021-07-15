using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace comprenXible_API.Services
{
    public interface IEmailService
    {
        Task SendEmailAsync(EmailInfo emailInfo, double totalResults, string emailType, string userName, string[] psychologistsInfo);
       
    }
}
