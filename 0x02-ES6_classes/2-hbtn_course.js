export default class HolbertonCourse {
  constructor(name, length, students) {
    // assign, with setter code
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // getter and setter for name
  get name() {
    return this._name;
  }

  set name(newName) {
    if (!(typeof newName === 'string')) {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // getter and setter for length
  get length() {
    return this._length;
  }

  set length(newLength) {
    if (!(typeof newLength === 'number')) {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  // getter and setter for students
  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw new TypeError('students must be an array');
    }
    for (const student of newStudents) {
      if (!(typeof student === 'string')) {
        throw new TypeError('students array must only have strings');
      }
    }
    this._students = newStudents;
  }
}
