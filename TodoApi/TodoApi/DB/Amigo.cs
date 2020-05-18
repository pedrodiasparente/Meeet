using System;
using System.Collections.Generic;

namespace TodoApi.DB
{
    public partial class Amigo
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public int UtilizadorId { get; set; }

        public virtual Utilizador Utilizador { get; set; }
    }
}
