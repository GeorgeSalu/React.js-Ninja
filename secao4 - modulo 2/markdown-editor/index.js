'use strict'

const { join }
const express = require('express')
const app = express()

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'))
})

app.listen(3000, () => console.log('Listening on localhost: 3000'))
