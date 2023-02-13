const numbers = [89, 35, 98, 12];
const student = {
    name: 'Nihan',
    age: 7,
    fvtFood: ['Burger', 'Morog Polau', 'Khacchi', 'Chinese', 'Ice Cream']
};

// 1. template string
const about = `My name is ${student.name}. I am 7 years old. And I love to eat ${student.fvtFood[0]} ${student.fvtFood[1]} ${student.fvtFood[3]}`;
console.log(about);
// ===========================================================

// 2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 === 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}
// =====================================================

// 3. spread operator
// ===========Array=============
const newNumbers = [...numbers];
// create a new array from an older array and add an element
const currentNumbers = [...numbers, 55];
numbers.push(100);
console.log(numbers);
console.log(newNumbers);
// ===========Object============
// create a new object from an older object and add an element
const programmer = {name: 'Nahid', age: 23, city: 'Chuadanga'};
const newOne = {...programmer};
console.log(newOne);
