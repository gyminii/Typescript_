// unknown, any, never type.

// Any has the most flexible type in typescript. It disables all type checking.
// Unknown is a little bit more restricted. First the type of the variable that is currently stored,

let userInput: unknown;
let userName: string;
let userNumber: number;
// unknown is better than any because it has some kind of type checking. 

userInput = 5;
userInput = 'Max';
// but it is best if you could specify the type before assigning it, instead of using unknown.
// Needs to do type checking before assigning it to userName. 
// unknown is used when you want to save various types of data.
// 1. string.
if (typeof userInput === 'string') {
    userName = userInput;
}
// 2. number
if (typeof userInput === 'number') {
    userNumber = userInput;
}

// userName = userInput;

// never type
// example of throwing an error in ts.
// This function returns never. It never produces a return value
const generateError = (message: string, code: number): never => {
    // 1. Throwing an error is an example where it returns never.
    throw { message: message, errorCode: code};
    // 2. infinite loop is an example where it return never;
    // while(true) {}
}

generateError('An Error has occurred', 500);
