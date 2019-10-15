'use strict'

import { storiesOf, action } from '@kadira/storybook'
import React from 'react'
import Actions from './actions'

storiesOf('Div', module)
  .add('first story', () => (
    <Actions
      getRepos={action('get repos')}
      getStarred={action('get starred')}
    />
  ))
