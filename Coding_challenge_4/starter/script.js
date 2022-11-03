const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, The tip was ${tip}, and the total value ${bill + tip}`);

const bill2 = 40;
const tip2 = bill2 <= 300 && bill2 >= 50 ? bill2 * 0.15 : bill2 * 0.2;

console.log(`The bill was ${bill2}, The tip was ${tip2}, and the total value ${bill2 + tip2}`);

const bill3 = 430;
const tip3 = bill3 <= 300 && bill3 >= 50 ? bill3 * 0.15 : bill3 * 0.2;

console.log(`The bill was ${bill3}, The tip was ${tip3}, and the total value ${bill3 + tip3}`);