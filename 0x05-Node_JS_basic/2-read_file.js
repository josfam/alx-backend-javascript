const fs = require('fs');

function countStudents(path) {
  let studentCount = 0;
  let text = null;
  const fieldList = {}; // stores fields, and which students belong in them
  try {
    text = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  const rows = text.split('\n').slice(1); // skip the header row
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
}

module.exports = countStudents;
