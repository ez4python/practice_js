'use strict';

// const firstName = 'Jimmy';
// const str = new String(firstName);
//
// console.log(firstName);
// console.log(str);

const car = {
    motor: 'X',
    color: 'red',
    isAirbag: true,
    maxSpeed: function () {
        return 200;
    }
}

const GM = {
    isAirbag: false,
}

// GM.__proto__ = car;
// console.log(GM);

// Object.setPrototypeOf(GM, car);
// console.log(GM);

const mers = Object.create(car);
