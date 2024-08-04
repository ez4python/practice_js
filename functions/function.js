// Function declaration
// greeting('Azizbek')
// function greeting(name) {
//     console.log(`Hi, my name is ${name}!`)
// }
// greeting('Akbarali')

// Function expression
// let my_func = function () {
//     console.log('This is function expression')
// }

// Inner Scope
// let num = 4
//
// function func() {
//     let num = 10
//     num++
//     console.log(num)
// }
//
// func()
// console.log(num)

// Function in function
function developer(name, age) {
    alert(`Hi, my name is ${name} and I'm fullstack-developer`)

    function showSkills() {
        let skills = ['HTML', 'CSS', 'JavaScript']
        for (let i = 0; i < skills.length; i++) {
            alert(`You have skills ${skills[i]}`)
        }
    }

    showSkills()

    function checkAge() {
        if (age >= 18) {
            console.log('Exactly data for learning IT')
        } else if (age < 18) {
            console.log('Super data for learning IT')
        }
    }

    checkAge()

    function calcPow(num) {
        return num * num
    }

    console.log(calcPow(6))
}

developer('Akbarali', 20)