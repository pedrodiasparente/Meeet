using System;
using System.Collections.Generic;

namespace TodoApi.DB
{
    public partial class Utilizador
    {
        public Utilizador()
        {
            Amigo = new HashSet<Amigo>();
            UtilizadorEvento = new HashSet<UtilizadorEvento>();
            UtilizadorGrupo = new HashSet<UtilizadorGrupo>();
        }

        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public float Longitude { get; set; }
        public float Latitude { get; set; }

        public virtual Localização L { get; set; }
        public virtual ICollection<Amigo> Amigo { get; set; }
        public virtual ICollection<UtilizadorEvento> UtilizadorEvento { get; set; }
        public virtual ICollection<UtilizadorGrupo> UtilizadorGrupo { get; set; }
    }
}
