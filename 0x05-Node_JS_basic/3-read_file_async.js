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
      console.log(`Number of students: ${studentCount}`);
      for (const [field, entry] of Object.entries(fieldList)) {
        const fieldCount = entry.length;
        const fieldMembers = entry.join(', ');
        console.log(`Number of students in ${field}: ${fieldCount}. List: ${fieldMembers}`);
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
