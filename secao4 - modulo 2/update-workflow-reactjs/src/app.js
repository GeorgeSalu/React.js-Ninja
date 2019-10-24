'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      title: '...'
    }
  }

  getTitle () {
    return new Promise((resolve, reject) => {
      resolve('My app with Promisse')
    })
  }

  async componentDidMount () {
    this.setState({ title: await this.getTitle() })
  }

  render () {
    return (
      <div>
        {this.state.title}
      </div>
    )
  }
}

export default App
