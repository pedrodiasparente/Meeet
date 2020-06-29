using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TodoApi.DB;

namespace TodoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MeeeTController : ControllerBase
    {

        private meeetdbContext _context;
        public MeeeTController(meeetdbContext context)
        {
            _context = context;
        }


        /*******\
       | * GET * | ---------------------------------------------------------------------------------------------------------------
        \*******/

        // Todos os grupos na database
        // GET: api/MeeeT
        [HttpGet]
        public List<Grupo> Get()
        {
            return _context.Grupo.ToList();
        }

        // Se um utilizador está a participar num evento
        // GET: api/MeeeT/isInEvent/id_user/id_event
        [Route("isInEvent/{id_user:int}/{id_evento:int}")]
        [HttpGet]
        public bool IsInEvent(int id_user, int id_evento)
        {
            foreach (var t in _context.UtilizadorEvento)
            {
                return t.IsMember(id_user, id_evento);
            }
            return false;
        }


        // Todos os utilizadores na database
        // GET: api/MeeeT/getUsers
        [Route("getUsers")]
        [HttpGet]
        public List<Utilizador> GetUsers()
        {
            return _context.Utilizador.ToList();
        }


        // Um utilizador concreto por id 
        // GET: api/MeeeT/getUser/id
        [Route("getUser/{id:int}")]
        [HttpGet]
        public Utilizador GetUser(int id)
        {
            return _context.Utilizador.Find(id);
        }


        // Login
        // GET: api/MeeeT/Login/user/password
        [Route("Login/{username}/{password}")]
        [HttpGet]
        public int Login(string username, string password)
        {
            foreach (var t in _context.Utilizador)
            {
                if (t.Username == username && t.Password == password) return t.Id;
            }
            return -1; //-1 = não encontrou nao tenho paciencia para melhorar
        }

        // Grupo por id
        // GET: api/MeeeT/getGrupo
        [Route("getGrupo/{id_grupo:int}")]
        [HttpGet]
        public Grupo getGrupo(int id_grupo)
        {
            return _context.Grupo.Find(id_grupo);
        }

        // Eventos na database
        // GET: api/MeeeT/getEventos
        [Route("getEventos")]
        [HttpGet]
        public List<Evento> GetEventos()
        {
            return _context.Evento.ToList();
        }

        // Encontra um grupo
        // GET: api/MeeeT/5
        [HttpGet("{id}", Name = "Get")]
        public Grupo Get(int id)
        {
            return _context.Grupo.Find(id);
        }


        // NEW FUNC
        // Amigos de um user
        // GET:
        [Route("getAmigosUser/{id_user:int}")]
        [HttpGet]
        public List<Amigo> GetAmigosUser(int id_user)
        {
            List<Amigo> ret = new List<Amigo>();
            
            foreach(var t in _context.Amigo)
            {
                if (id_user == t.UtilizadorId) ret.Add(t);
            }
            return ret;
        }


        // Longitude de um user
        // GET
        [Route("getLongitudeUser/{id_user:int}")]
        [HttpGet]
        public float? GetLongitudeUser (int id_user)
        {
            Utilizador u = GetUser(id_user);
            return u.Longitude;
        }

        // Latitude de um user
        // GET
        [Route("getLatitudeUser/{id_user:int}")]
        [HttpGet]
        public float? GetLatitudeUser (int id_user)
        {
            Utilizador u = GetUser(id_user);
            return u.Latitude;
        }

        // Procura Evento por id
        // GET
        [Route("getEvento/{id_evento:int}")]
        [HttpGet]
        public Evento GetEvento(int id_evento)
        {
            return _context.Evento.Find(id_evento);
        }

        // POR TESTAR
        // UtilizadorEventos de um Evento
        // GET
        [Route("getUserEventosPerEvent/{id_event:int}")]
        [HttpGet]
        public List<UtilizadorEvento> GetUserEventosPerEvent(int id_event)
        {
            List<UtilizadorEvento> lue = new List<UtilizadorEvento>();
            foreach (var aux in _context.UtilizadorEvento)
            {
                if (aux.IdEvento == id_event) lue.Add(aux);
            }
            return lue;
        }

        // POR TESTAR
        // Users num evento
        // GET
        [Route("getUsersPerEvent")]
        [HttpGet]
        public List<Utilizador> GetUsersPerEvent([FromBody] List<UtilizadorEvento> lue)
        {
            List<Utilizador> ret = new List<Utilizador>();
            foreach(var aux in lue)
            {
                foreach (var u in _context.Utilizador)
                {
                    if (u.Id == aux.IdUtilizador) {
                        ret.Add(u);
                        break;
                    }
                }
            }
            return ret;
        }

        // POR TESTAR
        // UtilizadorEventos de um User
        // GET
        [Route("getUserEventosPerUser/{id_user:int}")]
        [HttpGet]
        public List<UtilizadorEvento> GetUserEventosPerUser(int id_user)
        {
            List<UtilizadorEvento> lue = new List<UtilizadorEvento>();
            foreach (var aux in _context.UtilizadorEvento)
            {
                if (aux.IdUtilizador == id_user) lue.Add(aux);
            }
            return lue;
        }


        // POR TESTAR
        // Eventos num User
        // GET
        [Route("getEventosPerUser")]
        [HttpGet]
        public List<Evento> GetEventosPerUser([FromBody] List<UtilizadorEvento> lue)
        {
            List<Evento> ret = new List<Evento>();
            foreach (UtilizadorEvento ue in lue)
            {
                foreach (var e in _context.Evento)
                {
                    if (e.Id == ue.IdEvento)
                    {
                        ret.Add(e);
                        break;
                    }
                }
            }
            return ret;
        }

        // POR TESTAR
        // UtilizadorGrupos de um User
        // GET
        [Route("getUserGruposPerUser/{id_user:int}")]
        [HttpGet]
        public List<UtilizadorGrupo> GetUserGruposPerUser(int id_user)
        {
            List<UtilizadorGrupo> lug = new List<UtilizadorGrupo>();
            foreach (var aux in _context.UtilizadorGrupo)
            {
                if (aux.IdUtilizador == id_user) lug.Add(aux);
            }
            return lug;
        }

        // Grupos de um utilizador
        // GET: api/MeeeT/getGrupoPerUser
        [Route("getGrupoPerUser")]
        [HttpGet]
        public List<Grupo> GetGrupoPerUser([FromBody] List<UtilizadorGrupo> lug)
        {
            List<Grupo> ret = new List<Grupo>();
            foreach (var x in lug)
            {    
                foreach(var g in _context.Grupo)
                {
                    if(x.IdGrupo == g.Id)
                    {
                        ret.Add(g);
                        break;
                    }
                }
            }
            return ret;
        }

        // POR TESTAR
        // UtilizadorPedidosAmizade de um User
        // GET
        [Route("getUserPedidosAmizade/{id_user:int}")]
        [HttpGet]
        public List<UtilizadorPedidosAmizade> GetUserPedidosAmizade(int id_user)
        {
            List<UtilizadorPedidosAmizade> lup = new List<UtilizadorPedidosAmizade>();
            foreach (var aux in _context.UtilizadorPedidosAmizade)
            {
                if (aux.IdReceive == id_user) lup.Add(aux);
            }
            return lup;
        }

        // POR TESTAR
        // Pedidos de amizade de um user
        // GET
        [Route("getPedidosAmizade")]
        [HttpGet]
        public List<PedidosAmizade> GetPedidosAmizade([FromBody] List<UtilizadorPedidosAmizade> lup)
        {
            List<PedidosAmizade> ret = new List<PedidosAmizade>();
            foreach (var aux in lup)
            {
                foreach (var u in _context.PedidosAmizade)
                {
                    if (u.IdUserSend == aux.IdSend)
                    {
                        ret.Add(u);
                        break;
                    }
                }
            }
            return ret;
        }

        // POR TESTAR
        // EventoRequests de um Evento
        // GET
        [Route("getEventoHasRequests/{id_event:int}")]
        [HttpGet]
        public List<EventoHasRequests> GetEventoHasRequests(int id_event)
        {
            List<EventoHasRequests> ler = new List<EventoHasRequests>();
            foreach (var aux in _context.EventoHasRequests)
            {
                if (aux.IdEvento == id_event) ler.Add(aux);
            }
            return ler;
        }

        // POR TESTAR
        // Requests dum evento
        // GET
        [Route("getEventoRequests")]
        [HttpGet]
        public List<RequestEvento> GetEventoRequests([FromBody] List<EventoHasRequests> lup)
        {
            List<RequestEvento> ret = new List<RequestEvento>();
            foreach (var aux in lup)
            {
                foreach (var u in _context.RequestEvento)
                {
                    if (u.IdUserRequest == aux.IdUserRequest)
                    {
                        ret.Add(u);
                        break;
                    }
                }
            }
            return ret;
        }

        /********\
       | * POST * | ---------------------------------------------------------------------------------------------------------------
        \********/


        // POR TESTAR
        // Insere um amigo
        // POST: api/MeeeT/postamigo
        [Route("PostAmigo")]
        [HttpPost]
        public Amigo PostAmigo([FromBody] Amigo a)
        {
            _context.Amigo.Add(a);
            _context.SaveChanges();
            return a;
        }

        // POR TESTAR
        // Cria convite e adiciona-o à data base
        // POST
        [Route("MakeConvite")]
        [HttpPost]
        public void MakeConvite ([FromBody] Convites c)
        { 
            _context.Convites.Add(c);
            _context.SaveChanges();
        }

        // POR TESTAR
        // Usa convite para convidar um user com o id
        // POST
        [Route("InviteToEvent/{id:int}")]
        [HttpPost]
        public void InviteToEvent([FromBody] Convites c, int id)
        {
            UtilizadorConvites uc = new UtilizadorConvites();
            uc.IdConvidador = c.IdConvidador;
            uc.IdUser = id;
            uc.IdEvento = c.IdEvento;
            _context.UtilizadorConvites.Add(uc);
            _context.SaveChanges();
        }

        // POR TESTAR
        // Adiciona um evento
        // POST: api/MeeeT/postevento
        [Route("PostEvento")]
        [HttpPost]
        public Evento PostEvento([FromBody] Evento e)
        {
            _context.Evento.Add(e);
            _context.SaveChanges();
            return e;
        }

        // POR TESTAR
        // Convida um user para um certo evento com o seu id
        // POST: api/MeeeT/postevento
        [Route("AddToEvent/{id:int}")]
        [HttpPost]
        public void AddToEvent([FromBody] Evento e,int id)
        {
            UtilizadorEvento ev = new UtilizadorEvento();

            ev.IdEvento = e.Id;
            ev.IdUtilizador = id;
            ev.SharingPosition = 0; //default sharing position é 0 == not sharing
            _context.UtilizadorEvento.Add(ev);
            _context.SaveChanges();
        }

        // POR TESTAR
        // Cria requestevento e adiciona-o à data base
        // POST
        [Route("PostRequestEvento/{id_evento:int}")]
        [HttpPost]
        public void PostRequestEvento ([FromBody] RequestEvento re, int id_evento)
        {
            EventoHasRequests ehr = new EventoHasRequests();
            ehr.IdUserRequest = re.IdUserRequest;
            ehr.IdEvento = id_evento;
            _context.EventoHasRequests.Add(ehr);
            _context.RequestEvento.Add(re);
            _context.SaveChanges();
        }

        // POR TESTAR
        // Cria pedido de amizade e adiciona-o à data base
        // POST
        [Route("PostPedidoAmizade/{id_user_receive:int}")]
        [HttpPost]
        public void PostPedidoAmizade ([FromBody] PedidosAmizade pe, int id_user_receive)
        {
            UtilizadorPedidosAmizade upa = new UtilizadorPedidosAmizade();
            upa.IdSend = pe.IdUserSend;
            upa.IdReceive = id_user_receive;
            _context.UtilizadorPedidosAmizade.Add(upa);
            _context.PedidosAmizade.Add(pe);
            _context.SaveChanges();
        }

        // Set na latitude e longitude de um user
        // POST: api/MeeeT/setLatLon
        [Route("SetLatLon/{id:int}/{lat:float}/{lon:float}")]
        [HttpPost]
        public void SetLatLon(int id, float lat, float lon)
        {
            foreach(Utilizador u in _context.Utilizador)
            {
                if(id == u.Id)
                {
                    u.Latitude = lat;
                    u.Longitude = lon;
                }
            }
            _context.SaveChanges();
        }

        // POR TESTAR
        // Adiciona uma opção
        // POST: 
        [Route("PostOpcao")]
        [HttpPost]
        public Opcao PostOpcao ([FromBody] Opcao o)
        {
            _context.Opcao.Add(o);
            _context.SaveChanges();
            return o;
        }

        // POR TESTAR
        // Adiciona uma pessoa a opção
        // POST: 
        [Route("UserChooseOption/{id_user:int}")]
        [HttpPost]
        public void UserChooseOption([FromBody] Opcao o, int id_user)
        {
            UtilizadorOpcao uo = new UtilizadorOpcao();
            uo.IdUtilizador = id_user;
            uo.IdOpcao = o.IdOpcao;
            uo.IdVotacao = o.IdVotacao;
            uo.IdEvento = o.IdEvento;
            _context.UtilizadorOpcao.Add(uo);
            _context.SaveChanges();
        }


        // POR TESTAR
        // Adiciona uma votação
        // POST: api/MeeeT/postvotacao
        [Route("PostVotacao")]
        [HttpPost]
        public Votacao PostVotacao([FromBody] Votacao v)
        {
            _context.Votacao.Add(v);
            _context.SaveChanges();
            return v;
        }
        

        // POR TESTAR
        // Cria grupo e adiciona-o à data base
        // POST
        [Route("PostGrupo")]
        [HttpPost]
        public Grupo PostGrupo ([FromBody] Grupo g)
        {
            _context.Grupo.Add(g);
            _context.SaveChanges();
            return g;
        }

        // POR TESTAR
        // Adiciona pessoa a grupo e adiciona-o à data base
        // POST
        [Route("AddToGroup/{id:int}")]
        [HttpPost]
        public void AddToGroup([FromBody] Grupo g, int id)
        {
            UtilizadorGrupo ug = new UtilizadorGrupo();
            ug.IdGrupo = g.Id;
            ug.IdUtilizador = id;
            _context.UtilizadorGrupo.Add(ug);
            _context.SaveChanges();
        }


        // POR TESTAR
        // Adiciona um utilizador
        // POST: api/MeeeT/postuser
        [Route("PostUser")]
        [HttpPost]
        public Utilizador PostUser([FromBody] Utilizador u)
        {
            _context.Utilizador.Add(u);
            _context.SaveChanges();
            return u;
        }


        /*******\
       | * PUT * | ---------------------------------------------------------------------------------------------------------------
        \*******/

        // PUT: api/MeeeT/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }



        /**********\
       | * DELETE * | ---------------------------------------------------------------------------------------------------------------
        \**********/

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
