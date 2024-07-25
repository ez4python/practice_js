// 1st way
// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// 2nd way
// let i = 1
// do {
//     console.log(i)
//     i += 2
// } while (i <= 10)

// 3rd way
// let i = 10
// while (i > 0) {
//     console.log(i)
//     i--
// }


// ------ Task ------
let answers = []
let questions = [
    'What is your first_name',
    'What is your last_name',
    'How old are you'
]

//  1st way
// for (let i = 0; i < questions.length; i++) {
//     answers[i] = prompt(questions[i] + ' ?')
// }

// 2nd way
// let i = 0
// do {
//     answers[i] = prompt(questions[i] + ' ?')
//     i++
//
// } while (i < questions.length)

// 3rd way
let i = 0
while (i < questions.length) {
    answers[i] = prompt(questions[i] + ' ?')
    i++
}

console.log(answers)
