using comprenXible_API.DTO;
using comprenXible_API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace comprenXible_API.Encryptation
{
    public static class CryptoService
    {
        public static void EncryptReferences(ref User user, ref CryptographicEntry keys, UserData userData)
        {

            //In order to use the Dek (decryption key) as secret key, we need to pbkdf2 hash it
            byte[] dekSecretKey = pbkdf2.Hash(keys.DekSalt, Encoding.UTF8.GetString(keys.Dek));

            //Now we use it to encrypt user data
            user.Name = AES.Encrypt(userData.Name, dekSecretKey, keys.DekIv);
            user.Gender = AES.Encrypt(userData.Gender, dekSecretKey, keys.DekIv);
            user.Email = AES.Encrypt(userData.Email, dekSecretKey, keys.DekIv);

            //In order to protect the dek, we will encrypt it under hashed user's password kek (key encryption key)
            byte[] kek = pbkdf2.Hash(keys.KekSalt, userData.Password);

            //And finally we encrypt dek under kek, so it'll only be acce(x)ible through user's passweord
            keys.Dek = AES.Encrypt(Encoding.UTF8.GetString(keys.Dek), kek, keys.KekIv);

            //Now we're almost ready to store data in the database
            //But first we have to hash both email and password so admins won't be able to see nothing
            //Password will be hashed with SecSalt for higher security
            user.Password = pbkdf2.Hash(keys.SecSalt, userData.Password);
            //Email will be hashed with default salt so it can be located directly by the authentication controller
            user.HashedEmail = pbkdf2.Hash(userData.Email);
            keys.UserEmail = user.HashedEmail;

            //And then save it to the database
            //Note that data like salts and ivs are not cosidered sensible or dangerous data, so there's no problem with them being unencrypted

        }

        public static Test EncryptTest(UserCredentials credentials, CryptographicEntry keys, double score)
        {
            //1) Get SecretKek from password and kekSalt
            byte[] SecretKek = pbkdf2.Hash(keys.KekSalt, credentials.UserPassword);
            //2) Get Dek from secretKek and KekiV
            string Dek = AES.Decrypt(keys.Dek, SecretKek, keys.KekIv);
            //3) Get SecretDek from dek and DekSalt
            byte[] SecretDek = pbkdf2.Hash(keys.DekSalt, Dek);
            //4) And encrypt data with SecretDek + DekIv

            Test test = new Test(
                score: AES.Encrypt(Convert.ToString(score), SecretDek, keys.DekIv),
                date: AES.Encrypt(Convert.ToString(DateTime.Today), SecretDek, keys.DekIv),
                userEmail: pbkdf2.Hash(credentials.UserEmail)
                );

            return test;
        }

        //TODO

        //public static TestData DecryptTest(UserCredentials credentials, CryptographicEntry keys, Test test)
        //{
        //    //1) Get SecretKek from password and kekSalt
        //    byte[] SecretKek = pbkdf2.Hash(keys.KekSalt, credentials.UserPassword);
        //    //2) Get Dek from secretKek and KekiV
        //    string Dek = AES.Decrypt(keys.Dek, SecretKek, keys.KekIv);
        //    //3) Get SecretDek from dek and DekSalt
        //    byte[] SecretDek = pbkdf2.Hash(keys.DekSalt, Dek);
        //    //4) And encrypt data with SecretDek + DekIv

        //    TestData test = new TestData();

        //    return test;
        //}

        public static UserData Decrypt(User user, CryptographicEntry keys, UserCredentials credentials)
        {
            //1) Get SecretKek from password and kekSalt
            byte[] SecretKek = pbkdf2.Hash(keys.KekSalt, credentials.UserPassword);
            //2) Get Dek from secretKek and KekiV
            string Dek = AES.Decrypt(keys.Dek, SecretKek, keys.KekIv);
            //3) Get SecretDek from dek and DekSalt
            byte[] SecretDek = pbkdf2.Hash(keys.DekSalt, Dek);
            //4) And decrypt data with SecretDek + DekIv

            UserData userData = new UserData(
                name: AES.Decrypt(user.Name, SecretDek, keys.DekIv),
                gender: AES.Decrypt(user.Gender, SecretDek, keys.DekIv),
                tests: null
                );

            //And send
            return userData;
        }
    }
}
