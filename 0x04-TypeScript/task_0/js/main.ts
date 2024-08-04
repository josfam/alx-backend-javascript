// interface for a student

interface Student{
	firstName: string
	lastName: string
	age: number
	location: string
}

// creating two students
const student1: Student = {
	firstName: 'Marie',
	lastName: 'Moreau',
	age: 22,
	location: 'Godolkin University',
}

const student2: Student = {
	firstName: 'Jordan',
	lastName: 'Li',
	age: 20,
	location: 'Godolkin University',
}

// create an array

const studentsList: Student[] = [student1, student2];
const doc = document;

const studentTable = doc.createElement('table');

for (let student of studentsList) {
	const row = doc.createElement('tr');
	const firstNameRow = doc.createElement('td')
	const locationRow = doc.createElement('td')
	firstNameRow.textContent = student.firstName;
	locationRow.textContent = student.location;
	row.appendChild(firstNameRow);
	row.appendChild(locationRow);
	studentTable.appendChild(row);
}

doc.body.appendChild(studentTable);
