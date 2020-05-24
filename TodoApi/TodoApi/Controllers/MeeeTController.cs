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


        // Todos os amigos na database
        // GET: api/MeeeT/getAmigos
        [Route("getAmigos")]
        [HttpGet]
        public List<Amigo> GetAmigos()
        {
            return _context.Amigo.ToList();
        }


        // Um utilizador em concreto da database
        // GET: api/MeeeT/getInfoUser/id_user
        [Route("getInfoUser/{id_user:int}")]
        [HttpGet]
        public Utilizador GetInfoUser(int id_user)
        {
            return _context.Utilizador.Find(id_user);
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


        // Utilizador_Evento
        // GET: api/MeeeT/getUsersEvents
        [Route("getUsersEvents")]
        [HttpGet]
        public List<UtilizadorEvento> GetUsersEvents()
        {
            return _context.UtilizadorEvento.ToList();
        }


        // Utilizador_Grupo
        // GET: api/MeeeT/getUsersGrupos
        [Route("getUtilizadorGrupos/{id_user:int}")]
        [HttpGet]
        public ICollection<UtilizadorGrupo> GetUtilizadorGrupos(int id_user)
        {
            return GetInfoUser(id_user).UtilizadorGrupo;
        }


        // Grupo por id
        // GET: api/MeeeT/getGrupo
        [Route("getGrupo/{id_grupo:int}")]
        [HttpGet]
        public Grupo getGrupo(int id_grupo)
        {
            return _context.Grupo.Find(id_grupo);
        }


        // Grupos de um utilizador
        // GET: api/MeeeT/getGrupoPerUser
        [Route("getGrupoPerUser/{id_user:int}")]
        [HttpGet]
        public List<Grupo> GetGrupoPerUser(int id_user)
        {
            ICollection<UtilizadorGrupo> keys = GetUtilizadorGrupos(id_user);
            List<Grupo> ret = new List<Grupo>();
            foreach (var x in keys)
            {
                ret.Add(getGrupo(x.IdGrupo));
            }
            return ret;
        }

        // Eventos na database
        // GET: api/MeeeT/getEventos
        [Route("getEventos")]
        [HttpGet]
        public List<Evento> GetEventos()
        {
            return _context.Evento.ToList();
        }


        // Eventos por local
        // GET: api/MeeeT/getEventosLocs/id_latitude/id_longitude
        [Route("getEventosLocs/{id_latitude:decimal}/{id_longitude:decimal}")]
        [HttpGet]
        public List<Evento> GetEventosLocs(float id_latitude, float id_longitude)
        {
            List<Evento> events = new List<Evento>();

            foreach (var e in _context.Evento)
            {
                if (id_latitude == e.Latitude && id_longitude == e.Longitude)
                {
                    events.Add(e);
                }
            }
            return events;
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
            List<Amigo> aux = GetAmigos();
            
            foreach(var t in aux)
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

        // POR TESTAR
        // Users num evento
        // GET
        [Route("getUserEventos/{id_evento:int}")]
        [HttpGet]
        public List<Utilizador> GetUsersinEvents(int id_evento)
        {
            Evento e = _context.Evento.Find(id_evento);
            List<Utilizador> ret = new List<Utilizador>();
            foreach(var aux in e.UtilizadorEvento)
            {
                foreach (var u in GetUsers())
                {
                    if (u.Id == aux.IdUtilizador) 
                        {ret.Add(GetUser(u.Id)); break;}
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
        public void PostAmigo([FromBody] Amigo a)
        {
            _context.Amigo.Add(a);
            _context.SaveChanges();
        }

        // POR TESTAR
        // Cria convite e adiciona-o à data base
        // POST
        [Route("PostConvites")]
        [HttpPost]
        public void PostConvites (int id_convidador, int id_evento, List<int> ids)
        {
            Convites ret = new Convites();
            UtilizadorConvites uc = new UtilizadorConvites();
            ret.IdConvidador = id_convidador;
            ret.IdEvento = id_evento;
            foreach(var x in ids)
            {
                uc.IdConvidador = id_convidador;
                uc.IdUser = x;
                _context.UtilizadorConvites.Add(uc);
            }
            _context.Convites.Add(ret);
            _context.SaveChanges();
        }

        // POR TESTAR
        // Adiciona um evento
        // POST: api/MeeeT/postevento
        /*[Route("PostEvento")]
        [HttpPost]
        public void PostEvento(int id, string nome, DateTime d, float longitude, float latitude, string local, int tipo, int id_admin, string desc, int? idademin, List<int> ids)
        {
            Evento ret = new Evento();
            UtilizadorEvento ev = new UtilizadorEvento();
            ret.Id = id;
            ret.Nome = nome;
            ret.DataHora = d;
            ret.Longitude = longitude;
            ret.Latitude = latitude;
            ret.Local = local;
            ret.TipoEvento = tipo;
            ret.IdAdmin = id_admin;
            ret.Descricao = desc;
            ret.IdadeMinima = idademin;

            foreach(var x in ids)
            {
                ev.IdEvento = id;
                ev.IdUtilizador = x;
                _context.UtilizadorEvento.Add(ev);
            }
            _context.Evento.Add(ret);
            _context.SaveChanges();
        }
        */
        // POR TESTAR
        // Cria requestevento e adiciona-o à data base
        // POST
        [Route("PostRequestEvento")]
        [HttpPost]
        public void PostRequestEvento (int id_user_request, List<int> ids)
        {
            RequestEvento ret = new RequestEvento();
            EventoHasRequests ehr = new EventoHasRequests();
            ret.IdUserRequest = id_user_request;
            foreach(var x in ids)
            {
                ehr.IdUserRequest = id_user_request;
                ehr.EventoId = x;
                _context.EventoHasRequests.Add(ehr);
            }
            _context.RequestEvento.Add(ret);
            _context.SaveChanges();
        }

        // POR TESTAR
        // Cria pedido de amizade e adiciona-o à data base
        // POST
        [Route("PostPedidoAmizade")]
        [HttpPost]
        public void PostPedidoAmizade (int id_user_send, List<int> ids)
        {
            PedidosAmizade ret = new PedidosAmizade();
            UtilizadorPedidosAmizade upa = new UtilizadorPedidosAmizade();
            ret.IdUserSend = id_user_send;
            foreach(var x in ids)
            {
                upa.IdSend = id_user_send;
                upa.IdReceive = x;
                _context.UtilizadorPedidosAmizade.Add(upa);
            }
            _context.PedidosAmizade.Add(ret);
            _context.SaveChanges();
        }

        // POR TESTAR
        // Adiciona uma opção
        // POST: 
        [Route("PostOpcao")]
        [HttpPost]
        public void PostOpcao (int id_opcao, string opcao, int id_votacao, List<int> ids)
        {
            Opcao ret = new Opcao();
            UtilizadorOpcao uo = new UtilizadorOpcao();
            ret.IdOpcao = id_opcao;
            ret.Opcao1 = opcao;
            ret.IdVotacao = id_votacao;
            foreach(var x in ids)
            {
                uo.IdOpcao = id_opcao;
                uo.IdUtilizador = x;
                _context.UtilizadorOpcao.Add(uo);
            }
            _context.Opcao.Add(ret);
            _context.SaveChanges();
        }
       

        // POR TESTAR
        // Adiciona uma votação
        // POST: api/MeeeT/postvotacao
        [Route("PostVotacao")]
        [HttpPost]
        public void PostVotacao([FromBody] Votacao v)
        {
            _context.Votacao.Add(v);
            _context.SaveChanges();
        }
        

        // POR TESTAR
        // Cria grupo e adiciona-o à data base
        // POST
        [Route("PostGrupo")]
        [HttpPost]
        public void PostGrupo (int id_grupo, List<int> ids, string nome)
        {
            UtilizadorGrupo ug = new UtilizadorGrupo();
            Grupo ret = new Grupo();
            ret.Id = id_grupo;
            ret.Nome = nome;
            foreach(var x in ids)
            {
                ug.IdGrupo = id_grupo;
                ug.IdUtilizador = x;
                _context.UtilizadorGrupo.Add(ug);
            }
            _context.Grupo.Add(ret);
            _context.SaveChanges();
        }


        // POR TESTAR
        // Adiciona um utilizador
        // POST: api/MeeeT/postuser
        [Route("PostUser")]
        [HttpPost]
        public void PostUser([FromBody] Utilizador u)
        {
            _context.Utilizador.Add(u);
            _context.SaveChanges();
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
