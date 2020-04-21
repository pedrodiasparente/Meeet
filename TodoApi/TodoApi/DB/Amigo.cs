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

        public Amigo insertAmigo(Amigo a)
        {
            Amigo ems = new Amigo();
            ems.Id = a.Id;
            ems.Username = a.Username;
            ems.UtilizadorId = a.UtilizadorId;
            return ems;
        }
    }
}
