'use strict'

import React,{ PureComponent } from 'react'

class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      color: 'purple'
    }
  }

  render () {
    return (
      <div>
        <span>Color name: {this.state.color}</span>
        <br />
        <button onClick={() => this.setState({ color: 'black' })}>
          Change color black
        </button>
      </div>
    )
  }
}

export default App
