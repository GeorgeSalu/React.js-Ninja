'use strict'

import visibilityFilter from './index'
import { expect } from 'chai'

it('visibilityFilter should be a function', () => {
  expect(visibilityFilter).to.be.a('function')
})
