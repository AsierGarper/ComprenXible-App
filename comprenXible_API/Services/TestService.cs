using comprenXible_API.Data;
using comprenXible_API.DTO;
using comprenXible_API.Encryptation;
using comprenXible_API.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace comprenXible_API.Services
{
    public class TestService : ITestService
    {
        public readonly ApplicationDbContext _context;

        public TestService(ApplicationDbContext context)
        {
            _context = context;
        }


        public void TestStorageAsync(double score, UserCredentials credentials)
        {
            byte[] email = pbkdf2.Hash(credentials.UserEmail);
            CryptographicEntry keys = _context.CryptographicEntry.Where(c => c.UserEmail == email).FirstOrDefault();

            Test test = CryptoService.EncryptTest(credentials, keys, score);

            _context.Test.Add(test);
            _context.SaveChanges();

        }

        public List<TestData> GetTests(CryptographicEntry keys, UserCredentials credentials)
        {
            List<Test> tests = _context.Test.Where(t => t.UserEmail == pbkdf2.Hash(credentials.UserEmail)).ToList();
            List<TestData> result = new List<TestData>();
            foreach (var test in tests)
            {
                result.Add(CryptoService.Decrypt(test, keys, credentials));
            }
            return result;
        }

    }
}
