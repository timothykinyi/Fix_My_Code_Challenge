#!/usr/bin/node
/*
    Print a square with the character #
    
    The size of the square must be the first argument 
    of the program.
*/

const size = process.argv[2];

if (!size || isNaN(size) || size <= 0) {
  console.log('Usage: ./1-print_square.js <size>');
  process.exit(1);
}

for (let i = 0; i < size; i++) {
  let row = '';
  for (let j = 0; j < size; j++) {
    row += '#';
  }
  console.log(row);
}
