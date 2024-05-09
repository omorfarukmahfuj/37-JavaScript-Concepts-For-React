// truthy - 'omor', 4, true, {}, []
// falsy - '', 0, false, null, undefined

let myVar = 4;
// check any truthy
if (myVar) {
  myVar = myVar * 100;
} else {
  myVar = 0;
}

let myMoney = 50;
// you check negative or falsy anything
if (!myMoney) {

}

const money = 800;
let food;
if (money > 100) {
  food = 'biryani';
} else {
  food = 'cha biscuit';
}

// ternary
let food1 = money > 100 ? 'biryani' : 'cha biscuit';

console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'mojo' : 'filter water';
console.log(drink);

// number to string
const num1 = 45;
console.log(num1);
const numStr = num1 + '';
console.log(numStr);

// string to number
const input = '560';
const inputNum = +input;
console.log(inputNum);

// 
let isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');

// isActive ? showUser() : hideUser();
// use && if the left side is true then right side wil be executed
isActive && showUser();
// use || if the left side is false then right side will be executed
isActive || hideUser();

// toggle
isActive = !isActive;