// April 17 2021
// type checking

// types
const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {

    const result = n1 + n2;

    if (showResult) {
        console.log(phrase + result);
        // if we do the console log below, it will print out the string value
        // To avoid it we would need to to the mathematical operatiom before
        // the console.log. Therefore use the result constant.

        // console.log(phrase + n1 + n2);
    } else {
        return n1 + n2;
    }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);