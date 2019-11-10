'use strcit'

import React, { PureComponent } from 'react'

class Counter extends PureComponent {
  render() {
    return (
      <div>
        <h1>0</h1>
        <button>-</button>
        <button>+</button>
      </div>
    )
  }
}

export default Counter
