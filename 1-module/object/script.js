'use strict';

const thief = {
    jacket: 'black',
    height: 170,
    colors: {
        hair: 'gray',
        style: 'curley'
    },
    howOut: function () {
        console.log('Fast with help doors');
    }
};

// console.log(thief.colors.hair);

// delete thief.jacket;

// console.log(Object.keys(thief));

// for (let key in thief) {
//     // if (typeof thief[key] === 'object') {
//     //     for (let i in thief[key]) {
//     //         console.log(`Property ${i} has value ${thief[key][i]}`);
//     //     }
//     // } else {
//     //     console.log(`Property ${key} has value ${thief[key]}`);
//     // }
// }

// thief.howOut();

// const hair = thief.colors.hair;
// const style = thief.colors.style;


// destructuring
const {hair, style} = thief.colors;

// console.log(hair); // output: gray
// console.log(style); // output: curley
