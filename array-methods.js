const products = [
    {name: 'Macbook Pro M2', price: 250000, brand: 'Apple', color: 'silver'},
    {name: 'Iphone 14', price: 90000, brand: 'Apple', color: 'midnight'},
    {name: 'Watch series 6', price: 30000, brand: 'Apple', color: 'black'},
    {name: 'sunglasses', price: 4000, brand: 'Tom Ford', color: 'black'},
    {name: 'Keychron K3', price: 10000, brand: 'Keychron', color: 'Dark grey'},
    {name: 'MX 3', price: 13000, brand: 'Logitech', color: 'black'},
];

// 1. map
// use map if you want to get return an array by doing something in each element of an object
const brands = products.map(product => product.brand);
// console.log(brands);
const prices = products.map(product => product.price);
// console.log(prices);
// ==============================================================

// 2. forEach
// use forEach if you want to do something for each element but you don't want to get return anything. 
products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));

products.forEach(product => {

})
// ==============================================================

// 3. filter
// use filter if you want to select more than one element by giving condition
const cheap = products.filter(product => product.price <= 50000);
// console.log(cheap);

const specificName = products.filter(product => product.name.includes('n'));
// console.log(specificName);
// ==================================================================================

// 4. find
// use find if you want to get specific one by giving condition
// find locates a specific entry by a predicate and returns it
const special = products.find(product => product.name.includes('n'));
// console.log(special);




