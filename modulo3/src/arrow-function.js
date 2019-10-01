'use strict'

console.log('arrow function')

var sum = (x, y) => {
    return x + y
}

var add1 = x => sum(x, 1)

console.log(sum(1, 2))
console.log(add1(5))