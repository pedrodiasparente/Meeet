using System;
using System.Collections.Generic;

namespace TodoApi.DB
{
    public partial class Evento
    {
        public Evento()
        {
            UtilizadorEvento = new HashSet<UtilizadorEvento>();
        }

        public int Id { get; set; }
        public string Nome { get; set; }
        public DateTime DataHora { get; set; }
        public float Longitude { get; set; }
        public float Latitude { get; set; }

        public Localização GetLoc()
        {
            return L;
        }

        public virtual Localização L { get; set; }
        public virtual ICollection<UtilizadorEvento> UtilizadorEvento { get; set; }
    }
}
