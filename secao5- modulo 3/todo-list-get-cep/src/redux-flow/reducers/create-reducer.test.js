'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import createReducer from './create-reducer'

const initialState = 0
const reducer = createReducer(initialState, {
  'INCREMENT': (state, action) => state + 1,
  'DECREMENT': (state, action) => state - 1
})

it('createReducer should be a function', () => {
  expect(createReducer).to.be.a('function')
})

it('createReducer(initialState, {}) should return a reducer function', () => {
  expect(createReducer([], {})).to.be.a('function')
})

it('should create a reducer', () => {
  const before = 0
  const action = deepFreeze({ type: 'INCREMENT' })
  const after = 1
  expect(reducer(before, action)).to.be.equal(after)
})
