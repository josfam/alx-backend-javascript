const readline = require('node:readline');

// setup input and output for readline interface
const rlInterface = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

// checks if we are in interactive mode (terminal input)
const isInteractive = process.stdin.isTTY;

if (isInteractive) {
  // Ask the user for their name, and print it
  rlInterface.question(
    'Welcome to Holberton School, what is your name?\n', (name) => {
      console.log(`Your name is: ${name}`);
      rlInterface.close();
    },
  );
} else {
  // data got via a pipe
  process.stdin.on('data', (data) => {
    console.log('Welcome to Holberton School, what is your name?\n');
    const name = data.toString().trim();
    console.log(`Your name is: ${name}`);
    rlInterface.close();
  });
}

// Print a message when the program closes normally or prematurely with CTRL + C
rlInterface.on('close', () => {
  if (!isInteractive) {
    console.log('This important software is now closing');
  }
});
