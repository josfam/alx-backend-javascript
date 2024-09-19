const readline = require('readline');

// setup input and output for readline interface
const rlInterface = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

// checks if we are in interactive mode (terminal input)
const isInteractive = process.stdin.isTTY;

// welcome question
console.log('Welcome to Holberton School, what is your name?');

if (isInteractive) {
  // Ask the user for their name, and print it
  rlInterface.question(
    '', (name) => {
      process.stdout.write(`Your name is: ${name}\r`);
      rlInterface.close();
    },
  );
} else {
  // data got via a pipe

  // accumulate all the input first
  let input = '';
  process.stdin.on('data', (chunk) => {
    input += chunk;
  });
  process.stdin.on('end', () => {
    process.stdout.write(`Your name is: ${input}`);
    rlInterface.close();
  });
}

// Print a message when the program closes normally or prematurely with CTRL + C
rlInterface.on('close', () => {
  if (!isInteractive) {
    console.log('This important software is now closing');
  }
});
