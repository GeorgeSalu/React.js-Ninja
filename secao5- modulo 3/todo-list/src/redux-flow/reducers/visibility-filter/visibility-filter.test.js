'use strict'

import visibilityFilter, { initialState } from './index'
import { expect } from 'chai'
import deepFeeze from 'deep-freeze'
import { SET_VISIBILITY_FILTER, SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from './actions'

it('visibilityFilter should be a function', () => {
  expect(visibilityFilter).to.be.a('function')
})

it('should show all todos', () => {
  const before = SHOW_COMPLETED
  const action = deepFeeze({
    type: SET_VISIBILITY_FILTER,
    payload: { filter: SHOW_ALL }
  })
  const after = SHOW_ALL

  expect(visibilityFilter(before, action)).to.be.equal(after)
})

it('should show just completed todos', () => {
  const before = SHOW_ALL
  const action = deepFeeze({
    type: SET_VISIBILITY_FILTER,
    payload: { filter: SHOW_COMPLETED }
  })
  const after = SHOW_COMPLETED

  expect(visibilityFilter(before, action)).to.be.equal(after)
})

it('should show just active todos', () => {
  const before = SHOW_ALL
  const action = deepFeeze({
    type: SET_VISIBILITY_FILTER,
    payload: { filter: SHOW_ACTIVE }
  })
  const after = SHOW_ACTIVE

  expect(visibilityFilter(before, action)).to.be.equal(after)
})

it('should return latest state when action is unknown', () => {
  const before = SHOW_COMPLETED
  const action = deepFeeze({
    type: 'UNKNOWN',
    payload: { filter: SHOW_ALL }
  })
  const after = SHOW_COMPLETED

  expect(visibilityFilter(before, action)).to.be.equal(after)
})

it('should return initialState  when latest state is undefined', () => {
  const before = undefined
  const action = deepFeeze({})
  const after = initialState

  expect(visibilityFilter(before, action)).to.be.equal(after)
})
