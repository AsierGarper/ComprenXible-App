using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace comprenXible_API.Services
{
   public  interface IContactEmailService
    {
        Task SendContactUsEmailAsync(ContactUsEmail emailService);
    }
}
