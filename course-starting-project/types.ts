// {} is typescript = object notation instead of writing 'object'
// 1 object notation
const person: {} = {
    name: 'Max',
    age: 30
}
// 2 string array
const person1 : {
    name: string,
    age: number,
    // string array
    hobbies: string[] // it can be number[], boolean[]
} = {
    name: 'max',
    age: 30,
    // string array
    hobbies: ['Sports', 'Cooking']
}
// 3 tuple
const person2: {
    name: string,
    age: number,
    // string array
    hobbies: string[] // it can be number[], boolean[]
    // tuple where number is the length of array, string = type
    role: [number, string]
} = {
    name: 'max',
    age: 30,
    // string array
    hobbies: ['Sports', 'Cooking'],
    // tuple
    role: [2, 'author']
}
// 4 Enum
enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' };

const person3 = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    // tuple where number is the length of array, string = type
    role: Role.AUTHOR
} 

if (person3.role === Role.AUTHOR) {
    console.log('is author');
}

//
// ** any[] ** is a specialied array. It can have multiple different types of objects
//

for (const hobby of person1.hobbies) {
    console.log(hobby);
    // console.log(hobby.map()) would not work because it is available in arrays but not in strings. 
    // *map() does not exist in type 'string'*
}

console.log(person);
console.log(person1);
console.log(person2);
console.log(person3);