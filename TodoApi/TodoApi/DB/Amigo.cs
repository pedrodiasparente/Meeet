using System;
using System.Collections.Generic;

namespace TodoApi.DB
{
    public partial class Amigo
    {
        public Amigo()
        {
            Utilizador = new HashSet<Utilizador>();
        }

        public int Id { get; set; }
        public string Username { get; set; }

        public virtual ICollection<Utilizador> Utilizador { get; set; }
    }
}
