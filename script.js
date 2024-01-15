"use strict";

console.log("Hello from main.js");

// Variables

let age = 25;

console.log(age);

const salary = 80000;
console.log(salary);

// Datatypes

const name = "Vishwas";
const language = "JavaScript";
const channel = "Codevolution";

const total = 0;
const PI = 3.14;

const isPrimaryNumber = true;
const isNewUser = false;

let result;

console.log(result);

const res = undefined;

const data = null;

const person = {
  firstName: "Bruce",
  lastName: "Wayne",
  age: 30,
};
console.log(person.firstName);

const oddNumbers = [1, 3, 5, 7, 9];
console.log(oddNumbers[1]);

let a = 10;
a = "Vishwas";
a = true;

console.log(a);

// Operators

let x = 10;
let y = 5;

console.log(x % y);
console.log(++x);
console.log(--y);

console.log(y <= x);

const isValidNumber = x > 20 || 8 > y;
console.log(isValidNumber);

const isValid = false;

console.log("Bruce" + "Wayne");

const isEven = 10 % 2 === 0 ? "Number is even" : "Number is odd";
console.log(isEven);

// Type conversion

console.log(2 + "3");
console.log(true + "3");
console.log("4" - "2");

console.log(parseInt("3.14"));
console.log(String(500));
console.log(parseFloat("3.14"));
console.log((500).toString());
console.log(Boolean(10));

// Equality

const var1 = 10;
const var2 = "10";

console.log(var1 == var2);
console.log(var1 === var2);

// Conditional statements

const num = 0;

if (num > 0) {
  console.log("Number is positive");
} else if (num < 0) {
  console.log("Number is negative");
} else {
  console.log("Number is zero");
}

const color = "red";
switch (color) {
  case "red":
    console.log("Color is red");
    break;
  case "blue":
    console.log("Color is blue");
    break;
  case "green":
    console.log("Color is green");
    break;
  default:
    console.log("Not a valid color");
}

// Looping

// for (let i = 1; i <= 5; i++) {
//   console.log("Iteration number " + 1);
// }

// let i = 1;

// while (i <= 5) {
//   console.log("Iteration number " + i);
//   i++;
// }

// do {
//   console.log("Iteration number " + i);
//   i++;
// } while (i <= 5);

const numArray = [1, 2, 3, 4, 5];

for (const num of numArray) {
  console.log("Iteration number " + num);
}

// Functons

function greet(username) {
  console.log("Good morning " + username);
}

greet("Jasmin");

function add(a, b) {
  return a + b;
}

const arrowSum = (a, b) => a + b;
const addFive = (num) => num + 1;
const sum = add(5, 10);
console.log(sum);

//Scope

function testFn() {
  const myName = "Batman";
  console.log(myName);
}
testFn();
