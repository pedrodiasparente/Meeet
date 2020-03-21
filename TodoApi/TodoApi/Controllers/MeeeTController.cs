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

        // GET: api/MeeeT/getGrupos
        [Route("getGrupos")]
        [HttpGet]
        public List<Grupo> GetGrupos()
        {
            return _context.Grupo.ToList();
        }

        // GET: api/MeeeT/isAdmin
        [Route("isAdmin/{IdUtilizador:int}/{IdEvento:int}")]
        [HttpGet]
        public bool IsAdmin(int id_user, int id_evento)
        {
            foreach (var t in _context.UtilizadorEvento)
            {
                t.IsAdmin(id_user, id_evento);
            }
            return true;
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

        // GET: api/MeeeT/getEventosLocs
        [Route("getEventosLocs")]
        [HttpGet]
        public List<Localização> GetEventosLocs()
        {
            List<Localização> locs = new List<Localização>();
            foreach (var t in _context.Evento)
            {
                locs.Add(t.GetLoc());
            }
            return locs;
        }

        // GET: api/MeeeT/5
        [HttpGet("{id}", Name = "Get")]
        public Grupo Get(int id)
        {
            return _context.Grupo.Find(id);
        }

        // POST: api/MeeeT
        [HttpPost]
        public void Post([FromBody] string value)
        {
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
