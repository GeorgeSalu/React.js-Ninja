'use strict'

import { expect } from 'chai'
import createReducer from './create-reducer'

it('createReducer should be a function', () => {
  expect(createReducer).to.be.a('function')
})
