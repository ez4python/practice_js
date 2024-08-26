'use strict'

const buttons = document.querySelectorAll('button')

// console.log(buttons[0].classList.length)
// console.log(buttons[0].classList.item(1))

// buttons[1].classList.add('blue', 'some')
// buttons[0].classList.remove('blue')
// buttons[0].classList.toggle('blue')

// buttons[0].classList.add('red')
//
// if (buttons[0].classList.contains('red')) {
//   console.log('yeah')
// }

buttons[0].addEventListener('click', () => {
  // if (!buttons[1].classList.contains('red')) {
  //   buttons[1].classList.add('red')
  // } else {
  //   buttons[1].classList.remove('red')
  // }
  buttons[1].classList.toggle('red')
})
