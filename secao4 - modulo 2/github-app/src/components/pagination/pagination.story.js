'use strict'

import React from 'react'
import { storiesOf, module } from '@kadira/storybook'
import Pagination from './index'

const stories = storiesOf('<Pagination />', module)

stories.add('without props', () => (
  <Pagination total={10} />
))
