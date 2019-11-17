'use strict'

import visibilityFilter from './index'
import { expect } from 'chai'
import deepFeeze from 'deep-freeze'

it('visibilityFilter should be a function', () => {
  expect(visibilityFilter).to.be.a('function')
})

it('should show just completed todos', () => {
  const before = 'SHOW_COMPLETED'
  const action = deepFeeze({
    type: 'SET_VISIBILITY_FILTER',
    payload: { filter: 'SHOW_ALL' }
  })
  const after = 'SHOW_ALL'

  expect(visibilityFilter(before, action)).to.be.equal(after)
})
