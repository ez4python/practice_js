'use strict';

// function first() {
//     // code
//     setTimeout(() => {
//         console.log(1);
//     }, 1000);
// }
//
// function second() {
//     // code
//     console.log(2);
// }
//
// first();
// second();

// function edu(subject, callback) {
//     console.log(`I wanna teach ${subject}`);
//     callback();
//
// }
//
// function done() {
//     console.log("That's great");
// }
//
// edu('JavaScript', done);

function first(cb) {
    setTimeout(() => {
        console.log(1);
        cb();
    }, 1000);
}

function last() {
    console.log(2);
}

first(last);