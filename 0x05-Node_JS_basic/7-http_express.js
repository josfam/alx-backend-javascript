const express = require('express');
const fs = require('fs');

const app = express();

// handle root route
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// handle /students route
app.get('/students', (req, res) => {
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

  const database = process.argv[2];
  if (!database) {
    res.send('This is the list of our students\nCannot load the database');
  }

  countStudents(database)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

// listen on port 1245
app.listen(1245);

module.exports = app;
