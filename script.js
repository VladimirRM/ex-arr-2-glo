const number = [12, -3, 56, 76, 45, -1];
const names = ["vladimir", "Mark", "kate", "Margo", "Peter"];
const mix = [false, 0, NaN, 1, "Vladimir", "Khoma", 12];
const badNum = [45, -7, "Mark", 2, 5, 7, 8];

// lowerCase for foreach map mix /////////
/////////////select string  or type//

let correctNames = names.map((item, i, arr) => {
  return (arr[i] = item[0].toUpperCase() + item.slice(1).toLowerCase());
});
console.log(correctNames);
