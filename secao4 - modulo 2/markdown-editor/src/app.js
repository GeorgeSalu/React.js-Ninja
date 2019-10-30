'use strict'

import React,{ Component } from 'react'

import './css/style.css'

class App extends Component {
  constructor() {
    super()
    this.state = { value: '' }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({
      value: e.target.textarea.value
    })
  }

  render() {
    return (
      <div className='editor'>
        <form onSubmit={this.handleSubmit}>
          <textarea name='textarea'/>
          <button type='submit'>Renderixar markup</button>
        </form>

        <div className='view' />
      </div>
    )
  }
}

export default App
