using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;

namespace comprenXible_API.Encryptation
{
    public static class PRNG
    {
        public static byte[] RandomByte(int size)
        {
            //This is the provider for random number generator
            RNGCryptoServiceProvider crypto = new RNGCryptoServiceProvider();
            //First we create an empty byte sequence
            byte[] rdn = new byte[size];
            //Then we put the random byte on it and return
            crypto.GetBytes(rdn);
            return rdn;

        }
    }
}
