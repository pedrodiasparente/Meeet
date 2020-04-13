using System;
using System.Collections.Generic;

namespace TodoApi.DB
{
    public partial class EventoHasRequests
    {
        public int EventoId { get; set; }
        public int IdUserRequest { get; set; }

        public virtual Evento Evento { get; set; }
        public virtual RequestEvento IdUserRequestNavigation { get; set; }
    }
}
