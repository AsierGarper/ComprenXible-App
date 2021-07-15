using comprenXible_API.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MimeKit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace comprenXible_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactEmailsController : ControllerBase
    {
        private readonly IContactEmailService _contactEmailService;
        public ContactEmailsController(IContactEmailService contactEmailService)
        {
            _contactEmailService = contactEmailService;
        }

        [HttpPost]
        public void ContactUs([FromBody] ContactUsEmail contactUsEmail)
        {
            _contactEmailService.SendContactUsEmailAsync(contactUsEmail);

        }
    }
}
