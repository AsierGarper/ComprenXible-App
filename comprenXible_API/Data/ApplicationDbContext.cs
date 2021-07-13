using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using comprenXible_API.Models;

namespace comprenXible_API.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext (DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<comprenXible_API.Models.Answer> Answer { get; set; }

        public DbSet<comprenXible_API.Models.ChatResult> ChatResult { get; set; }

        public DbSet<comprenXible_API.Models.CryptographicEntry> CryptographicEntry { get; set; }

        public DbSet<comprenXible_API.Models.KeyWord> KeyWord { get; set; }

        public DbSet<comprenXible_API.Models.KeyWordReiteration> KeyWordReiteration { get; set; }

        public DbSet<comprenXible_API.Models.Question> Question { get; set; }

        public DbSet<comprenXible_API.Models.QuestionsResult> QuestionsResult { get; set; }

        public DbSet<comprenXible_API.Models.Result> Result { get; set; }

        public DbSet<comprenXible_API.Models.Test> Test { get; set; }

        public DbSet<comprenXible_API.Models.User> User { get; set; }
    }
}
