using comprenXible_API.Encryptation;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace comprenXible_API.Models
{
    public class CryptographicEntry
    {
        [Key]
        public int Id { get; set; }
        public byte[] UserEmail { get; set; }
        public byte[] Dek { get; set; }
        public byte[] DekIv { get; set; }
        public byte[] DekSalt { get; set; }
        public byte[] KekIv { get; set; }
        public byte[] KekSalt { get; set; }
        public byte[] SecSalt { get; set; }

        //The controller asigns a random 24/16 bytes array to each value
        public CryptographicEntry()
        {
            this.KekSalt = PRNG.RandomByte(24);
            this.DekSalt = PRNG.RandomByte(24);
            this.SecSalt = PRNG.RandomByte(24);
            this.DekIv = PRNG.RandomByte(16);
            this.KekIv = PRNG.RandomByte(16);
            this.Dek = PRNG.RandomByte(16);
        }
    }
}
