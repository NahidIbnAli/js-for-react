// 1. ===========Array destructuring===========
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [42, 65];

const [x, y] = numbers;

function boxify (num1, num2){
    const nums = [num1, num2];
    return nums;
}

console.log(boxify(90, 34));
// const [first, second] = [90, 34];
const [first, second] = boxify(90, 34);

const student = {
    name: 'Nihan',
    age: 7,
    fvtFood: ['Burger', 'Morog Polau', 'Khacchi', 'Chinese', 'Ice Cream']
};

const [foodOne, , , , foodTwo] = student.fvtFood;
// console.log(foodOne, foodTwo)
// ===================================================================

// =============Object destructuring=============
const {name, age} = {name: 'Nihan', age: 7};
const {namee, agee} = {id: 12, name: 'Nihan', salary: 190000, age: 14};

const employee = {
    ide: 'VS Code',
    designation: 'Developer',
    machine: 'Macbook Pro M3',
    languages: ['HTML', 'CSS', 'JS'],
    specification: {
        height: 70,
        weight: 69,
        address: 'Chuadanga',
        drink: 'Water',
        watch: {
            color: 'black',
            price: 35000,
            brand: 'Apple'
        }
    }
}

const {machine, ide} = employee;
const {weight, address} = employee.specification;
// =======================================================

// ==========Optional chaining===========
const {brand} = employee?.specification?.watch;
