const number = [12, -3, 56, 76, 45, -1];
const names = ["vladimir", "Mark", "kate", "Margo", "Peter"];
const mix = [false, 0, NaN, 1, "Vladimir", "Khoma", 12];
const badNum = [45, -7, "Mark", 2, 5, 7, 8];

// lowerCase for foreach map names /////////
/////////////select type "string" from mix, for,filter //

let result = mix.filter((item) => {
  return typeof item === "string";
});

console.log(result);
