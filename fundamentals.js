// 1. How to declare a variable using let and const
const fatherName = 'Ali Ibn Karim';
let season = 'rainy';
season = 'winter';
// ======================================================

// 2. Conditions
// 6 basic conditions: >, <, ===, !==, <=, >=
// Multiple conditions: &&, ||

if(fatherName === 'ali ibn karim' || season === 'rainy') {

}
else if(fatherName === 'Ali Ibn Karim') {

}
else{
    
}
// ============================================================

// 3. Array declare
// index, indexOf, length, push, pop, unshift, shift, slice, splice, split, join
const numbers = [89, 35, 98, 12];
numbers[0] = 56;
// ===========================================================

// 4. for loop
for(let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}
// ===================================================

// 5. function
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}

const output = multiply(35, 78);
// ================================================

// 6. Object
// 3 ways to access property by name
const student = {
    name: 'Nihan',
    age: 7,
    fvtFood: ['Burger', 'Morog Polau', 'Khacchi', 'Chinese', 'Ice Cream']
}

const myVariable = 'age';

console.log(student.age); // direct by property
console.log(student['age']); // access via property name string
console.log(student[myVariable]); // access via property name in a variable

