export default function updateStudentGradeByCity(students, city, newGrades) {
  // keep students from this city
  const studentsInCity = students.filter((student) => student.location === city);
  // map the new grades for each student
  return studentsInCity.map((student) => {
    // Find the new grades of this student in the new grades array.
    const newGrade = newGrades.find((current) => current.studentId === student.id);
    return {
      ...student,
      grade: newGrade ? newGrade.grade : 'N/A',
    };
  });
}
