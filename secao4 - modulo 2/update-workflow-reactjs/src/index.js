'use strict'

const promise = new Promise((resolve, reject) => {
  resolve('resolvida')
})

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error))


const fs = require('fs')

fs.readFile('../package.json', 'utf-8', (err, result) => {
  if(err) return console.log('ERROR', err)
  console.log(result)
})
