'use strict'

import React from 'react'
import Button from './index'
import renderer from 'react-test-renderer'

it('should button to matcj snapshot', () => {
  const tree = renderer.create(
    <Button onClick={() => null}>
      Click me
    </Button>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('should button to match snapshot', () => {
  const tree = renderer.create(
    <Button onClick={() => null}>
      Click me
    </Button>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
