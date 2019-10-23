'use strict'

const promise = new Promise((resolve, reject) => {
  resolve('resolvida')
})

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
