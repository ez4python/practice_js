'use strict'

document.body.style.background = 'black'

// console.log(document.head)
// console.log(document.body)

// console.log(document.firstChild)
// console.log(document.body.lastChild)

// const tmp = document.querySelector('#btn').parentNode.parentNode
// console.log(tmp)

// const currentData = document.querySelector('[data-current="b"]')
// const nextToCurrentData = currentData.nextElementSibling
// console.log(currentData)
// console.log(nextToCurrentData)

for (let node of document.body.childNodes) {
    if (node.nodeName !== "#text") {
        console.log(node)
    }
}
