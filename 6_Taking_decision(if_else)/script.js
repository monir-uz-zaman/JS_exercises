const country = "Bangladesh";
const continent = "Asia";
const language = "Bangla";
let population = 180;

/*console.log(country);
console.log(continent);
console.log(population);

let isIsLand = false;
let language;
console.log(typeof isIsLand);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
*/
console.log(population / 2);
population++;
console.log(population);

let finland = 6;
console.log(population > finland);

let averagePopulation = 33;
console.log(averagePopulation > population);

const discription = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(discription);

if (population >= averagePopulation) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average`);
};