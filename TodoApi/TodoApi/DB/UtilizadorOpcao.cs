using System;
using System.Collections.Generic;

namespace TodoApi.DB
{
    public partial class UtilizadorOpcao
    {
        public int IdUser { get; set; }
        public int IdOpcao { get; set; }

        public virtual Opcao IdOpcaoNavigation { get; set; }
        public virtual Utilizador IdUserNavigation { get; set; }
    }
}
