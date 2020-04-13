using System;
using System.Collections.Generic;

namespace TodoApi.DB
{
    public partial class Localização
    {
        public Localização()
        {
            Evento = new HashSet<Evento>();
            Utilizador = new HashSet<Utilizador>();
        }

        public string Cidade { get; set; }
        public string Rua { get; set; }
        public string País { get; set; }

        public virtual ICollection<Evento> Evento { get; set; }
        public virtual ICollection<Utilizador> Utilizador { get; set; }
    }
}
