using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq; // Add this using directive

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentDataController : ControllerBase
    {
        static List<StudentData> students = new List<StudentData>();

        // GET: api/<StudentDataController>
        [HttpGet]
        public IEnumerable<StudentData> Get()
        {
            return students;
        }

        // GET api/<StudentDataController>/5
        [HttpGet("{id}")]
        public StudentData Get(int id)
        {
            return students.FirstOrDefault(s => s.Id == id);
        }

        // POST api/<StudentDataController>
        [HttpPost]
        public void Post([FromBody] StudentData value)
        {
            students.Add(value);
        }

        // PUT api/<StudentDataController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] StudentData value)
        {
            int i = students.FindIndex(s => s.Id == id);
            if (i >= 0) { students[i] = value; }
        }

        // DELETE api/<StudentDataController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            students.RemoveAll(s => s.Id == id);
        }
    }
}
