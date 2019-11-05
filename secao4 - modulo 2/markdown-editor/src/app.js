'use strict'

import React, { Component } from 'react'

import marked from 'marked'

import 'normalize.css'
import './css/style.css'
import MarkdownEditor from 'views/mrkdown-editor'
import {v4} from 'node-uuid'

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
    this.clearState = () => ({
      value: '',
      id: v4()
    })


    this.state = {
      ...this.clearState(),
      isSaving: null,
      files: {}
    }

    this.handleChange = (e) => {
      this.setState({
        value: '',
        id: v4(),
        isSaving: null
      })
    }

    this.getMarkup = () => {
      return { __html: marked(this.state.value) }
    }

    this.createNew = () => {
      this.setState(this.clearState())
      this.textarea.focus()
    }

    this.handleSave = () => {
      if(this.state.isSaving) {
        localStorage.setItem(this.state.id, this.state.value)
        this.setState({
          isSaving: false
        })
      }
    }

    this.handleRemove = () => {
      localStorage.removeItem(this.state.id)
      this.createNew()
    }

    this.handleCreate = () => {
      this.createNew()
    }

    this.textareaRef = (node) => {
      this.textarea = node
    }

    this.handleOpenFile = (fileId) => () => {
      this.setState({
        value: this.state.files[fileId],
        id: fileId
      })
    }
  }

  componentDidMount() {
    const files = Object.keys(localStorage)
    this.setState({
      files: files.reduce((acc, fileId) => {
        return {
          ...acc,
          [fileId]: localStorage.getItem(fileId)
        }
      }, {})
    })
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
        handleRemove={this.handleRemove}
        handleCreate={this.handleCreate}
        textareaRef={this.textareaRef}
        files={this.state.files}
        handleOpenFile={this.handleOpenFile} />
    )
  }
}

export default App
