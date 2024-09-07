'use strict'

const now = new Date()

// console.log(now)
// console.log(`Date: ${now.getDate()}`)
// console.log(`FullYear: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth() + 1}`)
// console.log(`Day: ${now.getDay()}`)
// console.log(now.getTime())

const time = now.getTime(),
  seconds = parseInt(`${time}`)

console.log(seconds)