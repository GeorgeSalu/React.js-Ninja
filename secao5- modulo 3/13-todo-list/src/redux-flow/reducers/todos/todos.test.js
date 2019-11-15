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
  const action = deepFreeze({
    type: ADD_TODO,
    payload: {  id: 0,  text: 'Hey' }
  })
  const after = [{  id: 0,  text: 'hey',  completed: false}]

  expect(todos(before, after)).to.be.deep.equal(after)
})

it('should add a new todo item', () => {
  const before = deepFreeze([{
    id: 0,
    text: 'Hey',
    completed: false
  }])
  const action = deepFreeze({
    type: ADD_TODO,
    payload: {  id: 1,  text: 'Ho' }
  })
  const after = [{  id: 0,  text: 'Hey',  completed: false}, {  id: 1,  text: 'Ho',  completed: false}]

  expect(todos(before, after)).to.be.deep.equal(after)
})
