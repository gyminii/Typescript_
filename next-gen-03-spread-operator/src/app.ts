const userName = 'Max';
// userName = 'Maximilian';
let age = 30;

age = 29;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

// console.log(result);

const add = (a: number, b: number = 1) => a + b;

const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', event => console.log(event));
}

printOutput(add(5));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);
console.log(...hobbies);
const person = {
  name: 'Max',
  age: 30,
  hobbies: {
    h1: "hiking",
    h2: "coding",
  }
};

const copiedPerson = { ...person };
console.log(copiedPerson);

// Dynamically add elements to the parameter
// Rest parameters are used.
// Very useful when input limits are unlimited.
const add1 = (...numbers: number[]) => {
// by using spread operator it will merge all the incoming parameters, or incoming values (comma separated list of values) into an array
// reduce performs an operation to every element in an array (like for loop),
// reduce (function(currentResult, currentValue), initial value)
// in this case, 0 is the initial value. 
  return numbers.reduce((currentResult, currentValue) => {
    return currentResult + currentValue;
  }, 0);
}

const addedNumbers = add1(5, 10, 2, 3.7);
console.log(addedNumbers);