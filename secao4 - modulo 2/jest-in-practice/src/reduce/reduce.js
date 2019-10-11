'use strict'

const reduce = (arr, func, initialValue) => {
  let acc = initialValue
  let arraCopy = arr

  if(initialValue === undefined) {
    acc = arr[0]
    arraCopy = arr.slice(1)
  }

  for(let i = 0;i < arraCopy.length; i++) {
    acc = func(acc, arraCopy[i], i)
  }

  return acc
}

export default reduce
