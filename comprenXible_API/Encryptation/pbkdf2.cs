using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;

namespace comprenXible_API.Encryptation
{
    public static class pbkdf2
    {
        //Returns a 16 bytes key based on a salt and an input
        
        public static byte[] Hash(byte[] salt, string input)
        {            
            Rfc2898DeriveBytes hash = new Rfc2898DeriveBytes(input, salt, 100000);

            return hash.GetBytes(16);
        }


       //Standard hash

        public static byte[] Hash(string input)
        {            
            byte[] salt = new byte[16];
            Rfc2898DeriveBytes hash = new Rfc2898DeriveBytes(input, salt, 100000);

            return hash.GetBytes(16);
        }

        public static byte[] Hash(byte[] input)
        {            
            byte[] salt = new byte[16];
            Rfc2898DeriveBytes hash = new Rfc2898DeriveBytes(input, salt, 100000);

            return hash.GetBytes(16);
        }

    }
}
