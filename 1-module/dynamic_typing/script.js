'use strict'

// to string
// way-1
// console.log(String(4)) // output: string
// way-2
// console.log(typeof 20 + '1') // output: number1
// const tgUsername = 'ez4python'
// console.log('https://t.me/' + tgUsername)

// to number
// way-1
// console.log(typeof Number('4')) // output: number
// way-2
// console.log(typeof +'5') // output: number
// way-3
// console.log(typeof parseInt('15')) // output: number

// to boolean
// Return value == false: 0, "", null, undefined, NaN
// let age = 0
//
// if (age) {
//     console.log('G2')
// } else {
//     console.log('Vitality')
// }
//
// console.log('**********')
// age = 18
//
// if (age) {
//     console.log('G2')
// } else {
//     console.log('Vitality')
// }

console.log(typeof Boolean('4')) // output: true
console.log(Boolean('0')) // output: true
console.log(Boolean(0)) // output: false

console.log(typeof !!0) // output: boolean
console.log(!!0) // output: false