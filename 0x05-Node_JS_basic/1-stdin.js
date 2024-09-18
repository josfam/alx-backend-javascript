const readline = require('node:readline');

// setup input and output
const rlInterface = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

// Ask the user for their name, and print it
rlInterface.question(
  'Welcome to Holberton School, what is your name?\n', (name) => {
    console.log(`Your name is: ${name}`);
    rlInterface.close();
  },
);

// Print a message when the program closes normally or prematurely with CTRL + C
rlInterface.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
