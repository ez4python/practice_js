'use strict'

// const age = +prompt('How old are you ?', '')

// const enabledFilmCategories = {
//     'horror': false,
//     'action': false,
//     'cartoon': false,
// }
//
// if (age >= 25) {
//     enabledFilmCategories.horror = true
//     enabledFilmCategories.action = true
// } else if (age >= 18) {
//     enabledFilmCategories.action = true
// } else {
//     enabledFilmCategories.cartoon = true
// }
// console.log(enabledFilmCategories)

// age > 25 ? console.log('Horror Films') : console.log('Cartoon')

const color = 'red'

switch (color) {
    case 'red':
        console.log('Stop!')
        break
    case 'green':
        console.log('Goo!')
        break
    case 'yellow':
        console.log('Slowly')
        break
    default:
        console.log('Traffic jam')
        break
}