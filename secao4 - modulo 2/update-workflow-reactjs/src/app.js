'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      title: '...',
      Component: 'div'
    }
  }

  getTitle () {
    return new Promise((resolve, reject) => {
      resolve('My app with Promisse')
    })
  }

  async componentDidMount () {
    //import dinamico
    //const title = await import('components/title')

    this.setState({ title: await this.getTitle() })
  }

  render () {
    return (
      <div>
        <this.state.Component>{this.state.title}</this.state.Component>
      </div>
    )
  }
}

export default App
