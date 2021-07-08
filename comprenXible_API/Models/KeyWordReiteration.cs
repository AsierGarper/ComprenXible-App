using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace comprenXible_API.Models
{
    public class KeyWordReiteration
    {
        [Key]
        public int Id { get; set; }
        public int Reiteration { get; set; }

        //FK
        public int KeyWordId { get; set; }
        public KeyWord KeyWord { get; set; }
        public int ChatResultsId { get; set; }
        public ChatResult ChatResult { get; set; }

    }

}
