'use strict'

// let startNum = 1

// way - 1

// while (startNum <= 100) {
//     console.log(startNum)
//     startNum++
// }

// way - 2
// do {
//     console.log(startNum)
//     startNum++
// } while (startNum <= 100)

// way - 3
for (let i = 1; i <= 100; i++) {
    if (i === 3) {
        continue // to continue this loop
    }
    if (i === 8) {
        break // to break & stop this loop
    }
    console.log(i)
}