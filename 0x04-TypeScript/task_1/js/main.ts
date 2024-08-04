// 1. Let's build a Teacher interface
interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[propName: string]: any;
}

// 2. Extending the Teacher class
interface Directors extends Teacher {
	numberOfReports: number;
}

// 3. Printing teachers

// interface of the function:
interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

// The actual function:
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
	return `${firstName.slice(0,1)}. ${lastName}`;
}

// 4. Writing a class
class StudentClass {
	constructor(firstName: string, lastName: string) {

	}
}



// ==========  TESTING ==========

const teacher3: Teacher = {
	firstName: 'John',
	fullTimeEmployee: false,
	lastName: 'Doe',
	location: 'London',
	contract: false, // added property
	phoneNumber: '+256256256256', // added property
};

// teacher3.firstName = 'George'; //cannot be reassigned.
// console.log(teacher3);

const director1: Directors = {
	firstName: 'John',
	lastName: 'Doe',
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17,
  };

for (let [prop, value] of Object.entries(director1)) {
	console.log(prop, value);
}
// console.log(director1);