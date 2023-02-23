const number = [12, -3, 56, 76, 45, 0];
const names = ["vladimir", "Mark", "kate", "Margo", "Peter"];
const mix = [false, 0, NaN, 1, "Vladimir", "Khoma", 12];
const badNum = [45, -7, "Mark", 2, 5, 7, 8];

let sum = 0;

for (let i = 0; i < number.length; i++) {
  sum += number[i];
}

console.log(sum);
