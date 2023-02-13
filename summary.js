/*
===========Fundamentals============
1.1 variable (let, const) three types variable
1.2 condition (<, >, ===, !==, <=, >=) &&, ||, if-else, else if
1.3 array: declare, length, index, push, pop, unshift, shift, indexOf, slice, splice, split, join, includes
1.4 for loop, white
1.5 function return parameter
1.6 Object property, icluding array, object
=====================================================

===========ES6===========
1. template string ${}
2. spread (...)
2.1 copy an array then add a new element to an array
3. arrow function
3.1 no parameter ()
3.2 single parameter
3.3 multiple parameters ()
3.4 multi line
4. destructuring : object destructuring, array destructuring
5. object declaration shorthand
6. function parameter default value
===========================================================

Browser API
1. local storage, session storage
2. location API
3.History API
========================================

Others
1. array: map, forEach, filter, find
2. ternary operator
3. logical and, logical or && ||
4. JSON (stringify, parse)
5. +
*/

// ==============shortcut===============
const x = 50;
const y = 100;
const obj = {
    x: x,
    y: y
}
const obj1 = {x, y};
// ==============================
// if you give any variable as an object property, then it will automatically set the property name that is the variable name and will set the value that is the varible value
const name = 'Nihan';
const age = 7;

const person = {name, age};