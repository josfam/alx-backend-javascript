const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return fs.promises.readFile(path, 'utf-8')
    .then((data) => {
      // process the file data
      let studentCount = 0;
      const fieldList = {}; // stores fields, and which students belong in them
      const rows = data.split('\n').slice(1); // skip the header row
      for (const row of rows) {
        if (row) {
          studentCount += 1;
          const [firstName, , , field] = row.split(',');
          // add the name of this student to fields
          if (!fieldList[field]) {
            fieldList[field] = [];
            fieldList[field].push(firstName);
          } else {
            fieldList[field].push(firstName);
          }
        }
      }

      // build the final count and details
      let output = 'This is the list of our students\n';
      output += `Number of students: ${studentCount}\n`;
      for (const [field, entry] of Object.entries(fieldList)) {
        const fieldCount = entry.length;
        const fieldMembers = entry.join(', ');
        output += `Number of students in ${field}: ${fieldCount}. List: ${fieldMembers}\n`;
      }
      return output.trim();
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

// create server, and listen for data
const app = http.createServer();

app.on('request', (req, res) => {
  // handle home route
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  }

  // handle the /students path
  if (req.url === '/students') {
    // get the database file
    const database = process.argv[2];
    if (!database) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Cannot load the database');
    }
    countStudents(database)
      .then((data) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
      })
      .catch((error) => {
        res.write(500, { 'Content-Type': 'text/plain' });
        res.end(error);
      });
  }
});

app.listen(1245);

module.exports = app;
