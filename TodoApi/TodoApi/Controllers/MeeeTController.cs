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
            List<Utilizador> ret = new List<Utilizador>();
            foreach(var aux in _context.UtilizadorEvento)
            {
                foreach (var u in GetUsers())
                {
                    if (u.Id == aux.IdUtilizador && aux.IdEvento == id_evento) 
                        {ret.Add(u); break;}
                }
            }
            return ret;
        }

        // Todos os User_grupos da database
        // GET
        [Route("GetUserGrupos")]
        [HttpGet]
        public List<UtilizadorGrupo> GetUserGrupos()
        {
            return _context.UtilizadorGrupo.ToList();
        }

        // Get user_grupo por id de user e id de grupo
        // GET
        [Route("GetUserGrupos/{id:int}/{id_group:int}")]
        [HttpGet]
        public UtilizadorGrupo GetUserGrupos(int id, int id_group)
        {
            foreach(var u in _context.UtilizadorGrupo)
            {
                if (u.IdGrupo == id_group && u.IdUtilizador == id) return u;
                else { }
            }
            return null;
        }

        // Grupos de um utilizador
        // GET: api/MeeeT/getGrupoPerUser
        [Route("getGrupoPerUser/{id_user:int}")]
        [HttpGet]
        public List<Grupo> GetGrupoPerUser(int id_user)
        {
            List<Grupo> ret = new List<Grupo>();
            foreach (var x in _context.UtilizadorGrupo)
            {
                if (x.IdUtilizador == id_user)
                {
                    Grupo g = new Grupo(getGrupo(x.IdGrupo));
                    ret.Add(g);
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
        public void PostEvento([FromBody] Evento e)
        {
            _context.Evento.Add(e);
            _context.SaveChanges();
        }

        // POR TESTAR
        // Convida um user para um certo evento com o seu id
        // POST: api/MeeeT/postevento
        [Route("AddToEvent/{id:int}")]
        [HttpPost]
        public void InviteToEvent([FromBody] Evento e,int id)
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

        // POR TESTAR
        // Adiciona uma opção
        // POST: 
        [Route("PostOpcao")]
        [HttpPost]
        public void PostOpcao ([FromBody] Opcao o)
        {
            _context.Opcao.Add(o);
            _context.SaveChanges();
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
        public void PostGrupo ([FromBody] Grupo g)
        {
            _context.Grupo.Add(g);
            _context.SaveChanges();
        }

        // POR TESTAR
        // Adiciona pessoa a grupo e adiciona-o à data base
        // POST
        [Route("AddToGroup/{id_grupo:int}/{id:int}")]
        [HttpPost]
        public void AddToGroup(int id_grupo, int id)
        {
            UtilizadorGrupo ug = new UtilizadorGrupo();
            ug.IdGrupo = id_grupo;
            ug.IdUtilizador = id;
            _context.UtilizadorGrupo.Add(ug);
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
