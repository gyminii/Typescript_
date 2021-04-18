// April 17 2021

// Union types are more flexible types.
// For this instance
//  1. CombinedAged to add the numbers together
//  2. CombinedNames to add the strings together
// but the input1, and input2 have number types.
// To use union type, use the symbol | . It can be added as much as you want.
const combine = (input1: number | string, input2: number | string) => {
    // cannot combine
    // scenario 1 : returns number as result
    // scenario 2 : returns string as result
    let result : number | string;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine('Max', 'Anna')
console.log(combinedNames)



// Literal types && type alliases
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text'
// Usually used when union types are used. It is to give specific outputs since union types can accept many other data types. 
const combine1 = (
    // 1. When type alliases are not used.
    // input1: Combinable | string, 
    // input2: number | string, 

    // 2. When type alliases are used.
    input1: Combinable,
    input2: Combinable,

    // 1. When type alliases are not used
    // resultConversion: 'as-number' | 'as-text' // or you can use string
    
    // 2. When type alliases are used
    resultConversion: ConversionDescriptor
) => {
    // cannot combine
    // scenario 1 : returns number as result
    // scenario 2 : returns string as result
    let result : number | string;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'as-number') {
    //     return +result;
    // } else {
    //     return result.toString();
    // }
}
const combinedAges1 = combine1(30, 26, 'as-number');
console.log(combinedAges1);

const combinedNames1 = combine1('Max', 'Anna', 'as-text');
console.log(combinedNames1);
