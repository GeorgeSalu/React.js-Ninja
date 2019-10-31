'use strict'

import React, { Component } from 'react'

import marked from 'marked'

import 'normalize.css'
import './css/style.css'
import MarkdownEditor from './mrkdown-editor'

// colorindo codigo fonte (markdonw) lib : highlight.js@9.10.0
import('highlight.js').then((hljs) => {
  marked.setOptions({
    highlight: (code) => {
      return hljs.highlightAuto(code).value
    }
  })
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

    this.handleSave = () => {
      localStorage.setItem('md', this.state.value)
    }
  }

  componentDidMount() {
    const value = localStorage.getItem('md')
    this.setState({
      value
    })
  }

  render () {
    return (
      <MarkdownEditor
        value={this.state.value}
        handleChange={this.handleChange}
        getMarkup={this.getMarkup}
        handleSave={this.handleSave} />
    )
  }
}

export default App
