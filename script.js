const number = [12, -3, 56, 76, 45, 0];
const names = ["vladimir", "Mark", "kate", "Margo", "Peter"];
const mix = [true, 0, NaN, -1, "Vladimir"];
const BadNum = [45, -7, "Mark", 2, 5, 7, 8];

names.forEach(function (item, i, arr) {
  arr[i] = item[0].toUpperCase(1) + item.slice(1).toLowerCase();
});

console.log(names);
