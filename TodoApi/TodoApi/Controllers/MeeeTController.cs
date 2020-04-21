using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TodoApi.DB;

namespace TodoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MeeeTController : ControllerBase
    {

        private MeeeTContext _context;
        public MeeeTController(MeeeTContext context)
        {
            _context = context;
        }

        // GET: api/MeeeT
        [HttpGet]
        public List<Grupo> Get()
        {
            return _context.Grupo.ToList();
        }

        // GET: api/MeeeT/getAmigos
        [Route("getAmigos")]
        [HttpGet]
        public List<Amigo> GetAmigos()
        {
            return _context.Amigo.ToList();
        }


        [Route("getInfoUser/{id_user:int}")]
        [HttpGet]
        public Utilizador GetInfoUser(int id_user)
        {
            return _context.Utilizador.Find(id_user);
        }

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

        // GET: api/MeeeT/getUsers
        [Route("getUsers")]
        [HttpGet]
        public List<Utilizador> GetUsers()
        {
            return _context.Utilizador.ToList();
        }

        // GET: api/MeeeT/getUsersEvents
        [Route("getUsersEvents")]
        [HttpGet]
        public List<UtilizadorEvento> GetUsersEvents()
        {
            return _context.UtilizadorEvento.ToList();
        }

        // GET: api/MeeeT/getUsersGrupos
        [Route("getUtilizadorGrupos/{id_user:int}")]
        [HttpGet]
        public ICollection<UtilizadorGrupo> GetUtilizadorGrupos(int id_user)
        {
            return GetInfoUser(id_user).UtilizadorGrupo;
        }

        // GET: api/MeeeT/getGrupo
        [Route("getGrupo/{id_grupo:int}")]
        [HttpGet]
        public Grupo getGrupo(int id_grupo)
        {
            return _context.Grupo.Find(id_grupo);
        }

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

        // GET: api/MeeeT/getLocais
        [Route("getLocais")]
        [HttpGet]
        public List<Localização> GetLocais()
        {
            return _context.Localização.ToList();
        }

        // GET: api/MeeeT/getEventos
        [Route("getEventos")]
        [HttpGet]
        public List<Evento> GetEventos()
        {
            return _context.Evento.ToList();
        }

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

        // GET: api/MeeeT/5
        [HttpGet("{id}", Name = "Get")]
        public Grupo Get(int id)
        {
            return _context.Grupo.Find(id);
        }

        // POST: api/MeeeT
        // [HttpPost]
        //public void Post([FromBody] string value)
        //{
        //
        //}

        [Route("PostAmigo")]
        [HttpPost]
        public void PostAmigo(Amigo a)
        {
            Amigo toAdd = a.insertAmigo(a);
            _context.Add(toAdd);
            _context.SaveChanges();

        }



        // PUT: api/MeeeT/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
