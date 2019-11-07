'use strict'

import React, { PureComponent } from 'react'

const withContext = (Wrapper) => {
  class WithContext extends PureComponent {
    render () {
      return (
        <Wrapper />
      )
    }
  }

  return WithContext
}

export default withContext
