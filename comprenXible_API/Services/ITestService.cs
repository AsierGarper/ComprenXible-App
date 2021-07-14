using comprenXible_API.DTO;
using comprenXible_API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace comprenXible_API.Services
{
    public interface ITestService
    {
        void TestStorageAsync(double score, UserCredentials credentials);
        public List<TestData> GetTests(CryptographicEntry keys, UserCredentials credentials);
    }
}
