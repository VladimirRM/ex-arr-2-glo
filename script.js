const number = [12, -3, 56, 76, 45, -1];
const names = ["vladimir", "Mark", "kate", "Margo", "Peter"];
const mix = [false, 0, NaN, 1, "Vladimir", "Khoma", 12];
const badNum = [45, -7, "Mark", 2, 5, 7, 8];
const arr = ["vladimir", "Mark", "kate", "Margo", "Peter", "Nikolas"];

// lowerCase for foreach map names /////////
//////////find type string in mix with for //////////
/////////////select type "string" from mix, for,filter////////
/////////////recursion///////////////
let res = [];
for (let i = 0; i < names.length; i++) {
  if (!!names[i]) {
    res.push(names[i]);
  }
}

console.log(res);

// for (let i = 0; i < names.length; i++) {}
