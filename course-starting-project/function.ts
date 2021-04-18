// Function types and callback functions

const add = (n1: number, n2: number) => {
    return n1 + n2;
}

const printResult = (num: number) : void => {
    console.log('Result: ', num);
}

printResult(add(8, 8)); 

let combineValues: (a: number, b: number) => number;
// Callback function. Needs to specify the parameter type.
const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
    const result = n1 + n2;
    cb(result);
}

combineValues = add;
console.log(combineValues(8, 8));
// Since we have specified the parameter type above, we can just use the value result
// because it knows the return value already 
addAndHandle(10, 20, (result) => {
    console.log(result);
});