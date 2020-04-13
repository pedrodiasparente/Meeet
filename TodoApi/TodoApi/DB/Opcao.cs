using System;
using System.Collections.Generic;

namespace TodoApi.DB
{
    public partial class Opcao
    {
        public Opcao()
        {
            UtilizadorOpcao = new HashSet<UtilizadorOpcao>();
        }

        public int IdOpcao { get; set; }
        public string Opcao1 { get; set; }
        public int IdVotacao { get; set; }

        public virtual Votacao IdVotacaoNavigation { get; set; }
        public virtual ICollection<UtilizadorOpcao> UtilizadorOpcao { get; set; }
    }
}
