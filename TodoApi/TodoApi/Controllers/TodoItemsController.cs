using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApi.Models;

namespace TodoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoItemsController : ControllerBase
    {
        private readonly TodoContext _context;

        private List<TodoItem> items = new List<TodoItem>();

        public TodoItemsController(/*TodoContext context*/)
        {
            //_context = context;
            items.Add(new TodoItem { Id = 1, Name = "Fazer Compras", IsComplete = false });
            items.Add(new TodoItem { Id = 2, Name = "Arrumar a Casa", IsComplete = true });
            items.Add(new TodoItem { Id = 3, Name = "Fazer o Comer", IsComplete = false });
        }

        // GET: api/TodoItems/getNomeTarefa
        [Route("getNomeTarefa")]
        [HttpGet]
        public List<string> getTarefa()
        {
            List<string> tarefas = new List<string>();

            foreach (var t in items)
            {
                tarefas.Add(t.Name);
            }
            return tarefas;
        }

        // GET: api/TodoItems
        [HttpGet]
        //public async Task<ActionResult<IEnumerable<TodoItem>>> GetTodoItems()
        public List<TodoItem> GetTodoItems()
        {
            //return await _context.TodoItems.ToListAsync();
            return items;
        }

        // GET: api/TodoItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TodoItem>> GetTodoItem(long id)
        {
            //var todoItem = await _context.TodoItems.FindAsync(id);
            var todoItem = items.Find(x => x.Id == id);

            if (todoItem == null)
            {
                return NotFound();
            }

            return todoItem;
        }

        // PUT: api/TodoItems/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTodoItem(long id, TodoItem todoItem)
        {
            if (id != todoItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(todoItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TodoItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

            /*
        // POST: api/TodoItems
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<TodoItem>> PostTodoItem(TodoItem todoItem)
        {
            _context.TodoItems.Add(todoItem);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetTodoItem", new { id = todoItem.Id }, todoItem);
            return CreatedAtAction(nameof(GetTodoItem), new { id = todoItem.Id }, todoItem);
        }*/

            /*
        // DELETE: api/TodoItems/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TodoItem>> DeleteTodoItem(long id)
        {
            var todoItem = await _context.TodoItems.FindAsync(id);
            if (todoItem == null)
            {
                return NotFound();
            }

            _context.TodoItems.Remove(todoItem);
            await _context.SaveChangesAsync();

            return todoItem;
        }*/

        private bool TodoItemExists(long id)
        {
            return _context.TodoItems.Any(e => e.Id == id);
        }
    }
}
