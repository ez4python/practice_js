'use strict';

const arr = [2, 13, 14, 25, 8];
// arr.sort(compareFn);
arr.sort((a, b) => a - b);
console.log(arr);

// function compareFn(a, b) {
//     return a - b;
// }

// arr[99] = 0;
// console.log(arr.length);

// arr.pop();
// arr.push(89);

// arr.shift();
// arr.unshift(0);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// arr.forEach(function (value, index, arr) {
//     console.log(`arr[${index}] = ${value} from arr = [${arr}]`)
// });

// const movies = prompt("What's your favourite movies ?", '');
// const userMovies = movies.split(', ');
// console.log(userMovies.sort());
// console.log(userMovies.join('-'))
