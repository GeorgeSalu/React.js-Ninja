'use strict'

import React from 'react'
import Title from './index'

it('should Title to match snapshot', () => {
  const render = renderer.create(<Title>Titulo</Title>).toJSON()
})
