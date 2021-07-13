using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;

namespace comprenXible_API.Encryptation
{
    public static class AES
    {
        public static byte[] Encrypt(string plainText, byte[] Key, byte[] IV)
        {
            byte[] encrypted;
             
            using (AesManaged aes = new AesManaged())
            {
                  
                ICryptoTransform encryptor = aes.CreateEncryptor(Key, IV);
                  
                using (MemoryStream ms = new MemoryStream())
                { 
                    using (CryptoStream cs = new CryptoStream(ms, encryptor, CryptoStreamMode.Write))
                    {  
                        using (StreamWriter sw = new StreamWriter(cs))
                            sw.Write(plainText);
                        encrypted = ms.ToArray();
                    }
                }
            }
 
            return encrypted;
        }

        public static string Decrypt(byte[] cipherText, byte[] key, byte[] iv)
        {
            string plaintext = null;
 
            using (AesManaged aes = new AesManaged())
            {
 
                ICryptoTransform decryptor = aes.CreateDecryptor(key, iv);
   
                using (MemoryStream ms = new MemoryStream(cipherText))
                {
 
                    using (CryptoStream cs = new CryptoStream(ms, decryptor, CryptoStreamMode.Read))
                    {
 
                        using (StreamReader reader = new StreamReader(cs))
                            plaintext = reader.ReadToEnd();
                    }
                }
            }
            return plaintext;
        }
    }
}
