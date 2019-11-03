'use strict'

import React from 'react'
import { storiesOf, action, module } from '@kadira/storybook'
import SaveMessage from './index'

const stories = storiesOf('SaveMessage', module)

stories.add('SaveMessage with isSaging == null', () => {
  <div>
    <SaveMessage isSaving={null} />
  </div>
})
