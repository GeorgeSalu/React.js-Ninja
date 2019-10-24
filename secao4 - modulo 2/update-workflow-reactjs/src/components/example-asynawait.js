'use strict'

const path = require('path')

const read = async () => {
  const result = await readFile(path.join(__dirname, '..', 'package.json'), 'utf8')
  console.log(result)
}

read()
