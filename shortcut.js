// // Truthy And Falsy
// // ===========================
// // Truthy:
// // 1. true
// // 2. Any number (+value, -value) will be truthy other than 0
// // 3. Any string will be truthy other than empty string
// // 4. '0', 'false'
// // 5. []
// // 6. {}

// // Falsy:
// // 1. false
// // 2. undefined
// // 3. null
// // 4. 0
// // 5.''

// // ==========check truthy==========
// let myVar = 5;
// if(myVar) {
//     myVar = myVar * 100;
// }
// else {
//     myVar = 0;
// }
// // ==========================================

// let myMoney = 50;
// // you check negative or falsy anything
// // =============check falsy=============
// if(!myMoney) {
//     // if value is falsy, then it will be executed
// }
// // =================================================

// const money = 80;
// let food;
// if(money > 100) {
//     food = 'Biryani';
// }
// else {
//     food = 'Cha biscuit';
// }
// // ===============ternary operator===============
// let food1 = money > 100 ? 'Biryani' : 'Cha biscuit';
// console.log(food1);

// let drink = (money > 100 && myVar > 100) ? 'Coke' : 'filter water';
// console.log(drink);
// // ============================================================================

// number to string conversion
const num1 = 52;
const numstr = num1 + '';
console.log(numstr);
// ======================================

// // string to number
// const input = '560';
// const inputNum = +input;
// console.log(inputNum);
// // =================================

// let isActive = false;
// const showUser = () => console.log('display User');
// const hideUser = () => console.log('hide User');

// // shortcut for calling function using ternary operator
// isActive ? showUser() : hideUser();
// // ==================================================

// // more shortcut
// // use && if the left side is true then right side will be executed
// isActive && showUser(); 

// // use || if the left side is false then right side will be executed
// isActive || hideUser(); 

// // toogle boolean
// isActive = !isActive;



