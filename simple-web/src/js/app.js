//add files with styles and JS-modules
require('../css/main.css');
require('../sass/main.scss');

const print = require("./print.js");
const calc = require("./calc.js");

const add = (a, b) => a + b;
let sum = calc(2, 4, add);
print(sum);