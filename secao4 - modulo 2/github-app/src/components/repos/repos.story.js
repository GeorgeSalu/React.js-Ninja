'use strict'

import { storiesOf, module } from '@kadira/storybook'
import React from 'react'
import Repos from './repos'

storiesOf('respos', module)
  .add('with title prop', () => (
    <Repos title='Favoritos' />
  ))

  .add('with repos', () => (
    <Repos
      title='favoritos'
      repos={[{
        link: 'http://blog.com.br',
        name: 'Blog'
      }]}
     />
  ))
