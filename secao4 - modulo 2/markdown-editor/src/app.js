'use strict'

import React, { Component } from 'react'

import marked from 'marked'

import 'normalize.css'
import './css/style.css'
import MarkdownEditor from './components/mrkdown-editor'

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
    this.state = {
      value: '',
      isSaving: false
    }

    this.handleChange = (e) => {
      this.setState({
        value: e.target.value,
        isSaving: true
      })
    }

    this.getMarkup = () => {
      return { __html: marked(this.state.value) }
    }

    this.handleSave = () => {
      localStorage.setItem('md', this.state.value)
      if(this.state.isSaving) {
        this.setState({
          isSaving: false
        })
      }
    }

    this.handleRemove = () => {
      localStorage.removeItem('md')
    }
  }

  componentDidMount() {
    const value = localStorage.getItem('md')
    this.setState({ value: value || '' })
  }

  componentDidUpdate() {
    clearInterval(this.timer)
    this.timer = setInterval(this.handleSave(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render () {
    return (
      <MarkdownEditor
        value={this.state.value}
        handleChange={this.handleChange}
        getMarkup={this.getMarkup}
        handleSave={this.handleSave}
        isSaving={this.state.isSaving}
        handleRemove={this.handleRemove} />
    )
  }
}

export default App
