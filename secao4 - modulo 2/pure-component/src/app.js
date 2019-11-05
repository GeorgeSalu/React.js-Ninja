'use strict'

import React,{ PureComponent } from 'react'

class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      color: {
        otherColor: 'purple',
        moreOtherColor: 'white'
      }
    }

    this.handleClick = () => {
      this.setState({
        color: {
          ...this.state.color,
          otherColor: 'black'
        }
      })
    }
  }

  render () {
    return (
      <div>
        <span>Color name: {this.state.color.otherColor}</span>
        <br />
        <button onClick={this.handleClick}>
          Change color black
        </button>
      </div>
    )
  }
}

export default App
