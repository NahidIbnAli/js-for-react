// 1. JSON => stringify, parse
const student = {
    name: 'Nihan',
    age: 7,
    fvtFood: ['Burger', 'Morog Polau', 'Khacchi', 'Chinese', 'Ice Cream']
};

// use JSON stringify to convert an object to string 
const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

// user JSON parse to convert string to an object
const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);
// ======================================================

// 2. fetch
fetch('url')
.then(res => res.json())
.then(data => console.log(data))

// favorite way for fetching
const loadData = async () => {
    const res = await fetch('url');
    const data = await res.json();
    console.log(data);
}
// ===============================================

// 3. keys, values of an object
const keys = Object.keys(student);
const values = Object.values(student);
// ==============================================

// 4. for
const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach(num => console.log(num)); // for doing something for each element
numbers.map(num => num * 2); // for getting return something by giving condition
// =======================================================

// for of loop on array like object
// loop on an object using for in
// ==============================================

// add or remove from an array 
const products = [
    {name: 'Macbook Pro M2', price: 250000, brand: 'Apple', color: 'silver'},
    {name: 'phone', price: 90000, brand: 'Apple', color: 'midnight'},
    {name: 'Watch series 6', price: 30000, brand: 'Apple', color: 'black'},
    {name: 'sunglasses', price: 4000, brand: 'Tom Ford', color: 'black'},
    {name: 'Keychron K3', price: 10000, brand: 'Keychron', color: 'Dark grey'},
    {name: 'MX 3', price: 13000, brand: 'Logitech', color: 'black'},
];

const newProduct = {name: 'Earphone', price: 500, brand: 'Xiaomi', color: 'black'};

// copy products array and then add newProduct
const newProducts = [...products, newProduct];
// ========================================================

// create a new array without one specific item
// remove phone means create a new array without the phone

const remaining = products.filter(product => product.name !== 'phone');
console.log(remaining);

