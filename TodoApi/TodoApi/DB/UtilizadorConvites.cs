using System;
using System.Collections.Generic;

namespace TodoApi.DB
{
    public partial class UtilizadorConvites
    {
        public int IdUser { get; set; }
        public int IdConvidador { get; set; }

        public virtual Convites IdConvidadorNavigation { get; set; }
        public virtual Utilizador IdUserNavigation { get; set; }
    }
}
