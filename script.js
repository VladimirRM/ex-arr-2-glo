const number = [12, -3, 56, 76, 45, -1];
const names = ["vladimir", "Mark", "kate", "Margo", "Peter"];
const mix = [false, 0, NaN, 1, "Vladimir", "Khoma", 12];
const badNum = [45, -7, "Mark", 2, 5, 7, 8];

// lowerCase for foreach map names /////////
//////////find type string in mix with for //////////
/////////////select type "string" from mix, for,filter////////

names.forEach((x, y, z) => {
  return (z[y] = x[0].toUpperCase() + x.slice(1).toLowerCase());
});
console.log(names);

// for (let i = 0; i < names.length; i++) {

// }
