// Define an array
const fruits = ['apple', 'banana', 'orange', 'grape', 'pear'];

// Create an iterator
const iterator = fruits[Symbol.iterator]();

// Iterate using the iterator
console.log(iterator.next().value); 
console.log(iterator.next().value); 
console.log(iterator.next().value); 
console.log(iterator.next().value); 
console.log(iterator.next().value);
console.log(iterator.next().value); 