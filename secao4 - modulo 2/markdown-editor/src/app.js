'use strict'

import React, { Component } from 'react'

import marked from 'marked'
import hljs from 'highlight.js'

import 'normalize.css'
import './css/style.css'
import MarkdownEditor from './mrkdown-editor'

// colorindo codigo fonte (markdonw) lib : highlight.js@9.10.0
marked.setOptions({
  highlight: (code) => {
    return hljs.highlightAuto(code).value
  }
})

class App extends Component {

  constructor () {
    super()
    this.state = { value: '' }

    this.handleChange = (e) => {
      this.setState({
        value: e.target.value
      })
    }

    this.getMarkup = () => {
      return { __html: marked(this.state.value) }
    }
  }

  render () {
    return (
      <MarkdownEditor
        value={this.state.value}
        handleChange={this.handleChange}
        getMarkup={this.getMarkup} />
    )
  }
}

export default App
