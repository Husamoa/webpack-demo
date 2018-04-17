console.log("Excercise 1");

const birthsYears = [1985, 1986, 1987, 1988, 1989, 1990, 2000, 1950];
const year = (new Date()).getFullYear();
const ages = birthsYears.map(birthYear => year - birthYear);
console.log(ages);