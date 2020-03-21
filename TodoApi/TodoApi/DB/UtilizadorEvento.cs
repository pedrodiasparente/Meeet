using System;
using System.Collections.Generic;

namespace TodoApi.DB
{
    public partial class UtilizadorEvento
    {
        public int IdUtilizador { get; set; }
        public int IdEvento { get; set; }

        public virtual Evento IdEventoNavigation { get; set; }
        public virtual Utilizador IdUtilizadorNavigation { get; set; }

        public bool IsAdmin(int id_user, int id_evento)
        {
            return true;
        }
    }
}
