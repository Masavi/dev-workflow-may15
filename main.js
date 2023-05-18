// console.log('Hello World 🌎');

/*
  Write a node program that takes in an unlimited number of
  command line arguments, goes through each and prints out
  the sum of them.
  If any argument is not a whole number, skip it.
  Do support negative numbers though.
*/

// FOR LOOPS, IF STATEMENTS, VARIABLES, FUNCTIONS (CONSOLE.LOG) + OBJECTS

// 1) How do i take command line arguments? How can i take an unlimited amount?
const commandLineArguments = process.argv;
console.log(commandLineArguments);
// console.log(commandLineArguments[2]);

// 2) How can i go through each command line argument?

// 2.1) How do i use for loops?
// 2.2) How do i use an array within a for loop?

/**
 * For loops work by passing three things:
 * 1. iterator or index variable
 * 2. condition of looping
 * 3. how to modify the iterator or index after each loop
 */

// 4) How do i add all of them?
let sum = 0;

for(var i=2; i<commandLineArguments.length; i++){

  // 3) How do i print each command line argument?
  console.log(i, commandLineArguments[i]);

  // 4) To add each element, i can use the "sum" variable within the for loop

  // 4.1) Transform commandLineArgument from string into a number
  let number = Number(commandLineArguments[i]);
  console.log('NUMBER:', number);

  // 5) How do i know if a number is not whole?
  // 6) How do i skip number that are not whole?
  if (number % 1 === 0) {
    sum = sum + number;
  }
}

console.log('SUM RESULT:', sum);

