'use strict'

const respostaQueVemDoServidor = () => [
  'javascript',
  'react',
  'node'
]

it('test snapshot',() => {
  expect(respostaQueVemDoServidor()).toMatchSnapshot()
})
