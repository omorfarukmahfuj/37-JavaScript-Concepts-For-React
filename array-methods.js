const products = [
  { name: 'laptop', price: 62000, brand: 'lenovo', color: 'silver' },
  { name: 'phone', price: 125000, brand: 'iphone', color: 'golden' },
  { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
  { name: 'sunglass', price: 700, brand: 'rayban', color: 'black' },
  { name: 'camera', price: 80000, brand: 'canon', color: 'gray' },
];

// 1. map
const brands = products.map(product => product.brand);
console.log(brands);
const prices = products.map(product => product.price);
console.log(prices);

//  2. forEach
products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));

products.forEach(product => {
  // Multiline
});

// 3. filter
const affordable = products.filter(product => product.price <= 5000);
console.log(affordable);

const specificName = products.filter(product => product.name.includes('n'));
console.log(specificName);

//  4. find
const special = products.find(product => product.name.includes('n'));
console.log(special);







