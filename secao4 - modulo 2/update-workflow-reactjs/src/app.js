'use strict'

import React, { Component } from 'react'


class App extends Component {
  constructor() {
    super()
    this.state = {
      title: '...'
    }
  }

  getTitle() {
    return new Promise((resolve, reject) => {
      resolve('My app with Promisse')
    })
  }

  componentDidMount() {
    this.getTitle().then((result) => {
      this.setState({ title: result })
    })
  }

  render() {
    return (
      <div>
        {this.state.title}
      </div>
    )
  }
}

export default App
