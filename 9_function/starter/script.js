'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can Drive :D");

// const interface = "Audio";
// const private = 534;




function logger() {
    console.log(`My name is Jonas`);
}

// Calling/ running / invocing function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


const num = Number('23');


*/

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const desFinland = describeCountry("Finland", 6, "Helsinki");

const desGermany = describeCountry("Germany", 83, "Berlin");

const desPortugal = describeCountry("Portugal", 10, "Lisbon");

console.log(desGermany);
console.log(desFinland);
console.log(desPortugal);