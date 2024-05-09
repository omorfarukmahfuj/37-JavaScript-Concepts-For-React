const person = {
  name: 'Omor Faruk Mahfuj',
  profession: 'developer',
  age: 20,
  660133: 'id',
  'current-year': 2024
}

// dot notation
const name = person.name;

// bracket notation
const profession = person['profession'];

const personAge = 'age';
const age = person[personAge];

const id = person[660133];
const currentYear = person["current-year"];
console.log(name, profession, age, id, currentYear);