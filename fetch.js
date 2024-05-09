// 1. JSON → stringify, parse
const student = {
  name: "Omor Faruk",
  age: 20,
  programmingLanguage: ['JavaScript', 'Java']
};

const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);

// 2. fetch
fetch('url')
  .then(res => res.json())
  .then(data => console.log(data));

//keys, values
const keys = Object.keys(student);
const values = Object.values(student);

// for
const numbers = [25, 52, 63, 54, 89, 74, 54];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of on array like object
// for in on an object using for in

// add or remove from any array
const products = [
  { name: 'laptop', price: 62000, brand: 'lenovo', color: 'silver' },
  { name: 'phone', price: 125000, brand: 'iphone', color: 'golden' },
  { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
  { name: 'sunglass', price: 700, brand: 'rayban', color: 'black' },
  { name: 'camera', price: 80000, brand: 'canon', color: 'gray' },
];

const newProduct = { name: 'webcam', price: 2500, brand: 'walton', color: 'black' };

// copy products array and then add newProduct
const newProducts = [...products, newProduct];

// create a new array without one specific item
// remove phone means create a new array without the phone
const remaining = products.filter(product => product.name !== 'phone');
console.log(remaining);