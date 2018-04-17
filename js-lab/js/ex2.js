console.log("Excersise 2");

const numbers = [1, 2, 3, 4, 5, 6];

let sum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue); 
let mul = numbers.reduce((previousValue, currentValue) => previousValue * currentValue);

console.log(`sum = ${sum}, mul = ${mul}`);