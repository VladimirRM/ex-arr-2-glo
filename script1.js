// const number = [12, -3, 56, 76, 45, 0];
// const names = ["vladimir", "Mark", "Kate", "Margo", "Peter"];
// const mix = [true, 0, NaN, -1, "Vladimir"];
// const BadNum = [45, -7, "Mark", 2, 5, 7, 8];

// for (let i = 0; 0 < mix.length; i++) {

// }

// mix.forEach( (item, index, arr)=> {
//   console.table({ item, index, arr });
// });

////////////// For LOwerCase /////////////////

// for (let i = 0; i < names.length; i++) {
//   names[i] = names[i][0].toUpperCase() + names[i].slice(1).toLowerCase();
// }
// console.log(names);

// names.forEach(function (item, i, arr) {
//   arr[i] = item[0].toUpperCase(1) + item.slice(1).toLowerCase();
// });

// console.log(names);

// const correctName = names.map(function(item){
//   return item[0].toUpperCase() + item.slice(1).toLowerCase()
// })

// console.log(names)

// console.log(correctName);

/////////////select string ////////////////////

// let forWords = [];

// for (let i = 0; i < mix.length; i++) {
//   if (typeof mix[i] === "string"&& isNaN(mix[i])) {
//     forWords.push(mix[i]);
//   }
// }

// console.log(forWords);

// let filterWords = mix.filter((item) => {
//   return typeof item === "string" && isNaN(item);
// });

// console.log(filterWords) ;


///////////////////  filter positiveNumbers /////////////


// let result = false;

// for (let i = 0; i < mix.length; i++) {
//   if (typeof mix[i] === "number") {
//     result = true;
//     break;
//   }
// }

// console.log(result);
