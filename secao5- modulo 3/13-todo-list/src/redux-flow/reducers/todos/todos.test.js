'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import todos from './index'
import { ADD_TODO } from './actions'

it('should todos be a function', () => {
  expect(todos).to.be.a('function')
})

it('should add a todo', () => {
  const before = deepFreeze([])
  const action = {
    type: ADD_TODO
  }
  const after = {
    id: 0,
    text: 'hey',
    completed: false
  }
})
