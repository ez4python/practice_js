'use strict'

// old way
// const box = document.getElementById('box')
// console.log(box)
//
// const buttons = document.getElementsByTagName('button')
// console.log(buttons)
//
// const circles = document.getElementsByClassName('circle')
// console.log(circles)

// new way
// const wrapper = document.querySelector('.wrapper')
// console.log(wrapper)
//
// const hearts = wrapper.querySelectorAll('.heart')
// console.log(hearts)
//
// hearts.forEach((item) => {
//     console.log(item)
// })

/* ---------------------------------------------- */
// working with DOM elements

const box = document.querySelector('#box')
const buttons = document.querySelectorAll('button')
const circles = document.querySelectorAll('.circle')
const circleWrapper = document.querySelector('.circle_wrapper')

box.style.cssText = 'background-color: red; width: 100px; height: 100px'

box.style.backgroundColor = 'red'
box.style.borderRadius = '50%'

buttons.forEach(item => {
    item.style.height = '100px'
})

// circles[2].style.backgroundColor = 'yellow'

const myCircle = document.createElement('div')
myCircle.classList.add('circle')
circleWrapper.append(myCircle)
// circles[0].after(myCircle)
// circles[0].before(myCircle)
// circles[3].replaceWith(myCircle)

// myCircle.textContent = 'E'
// myCircle.innerHTML = '<pre>E</pre>'
