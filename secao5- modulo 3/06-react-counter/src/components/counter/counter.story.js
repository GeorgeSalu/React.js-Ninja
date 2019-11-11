'use strict'

import Counter from './index'
import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

const stories = storiesOf('Counter', module)

stories.add('Counter', () => (
  <Counter Counter={1} increment={action('increment')} decrement={action('decrement')} />
))
