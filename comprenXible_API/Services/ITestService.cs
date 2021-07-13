using comprenXible_API.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace comprenXible_API.Services
{
    public interface ITestService
    {
        void TestStorageAsync(double score, UserCredentials credentials);
    }
}
