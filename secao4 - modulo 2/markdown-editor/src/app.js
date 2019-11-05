'use strict'

import React, { Component } from 'react'

import marked from 'marked'

import 'normalize.css'
import './css/style.css'
import MarkdownEditor from 'views/markdown-editor'
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
      title: '',
      id: v4()
    })


    this.state = {
      ...this.clearState(),
      isSaving: null,
      files: {}
    }

    this.handleChange = (field) => (e) => {
      this.setState({
        [field]: e.target.value,
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

        const files = {
          ...this.state.files,
          [this.state.id]: {
            title: this.state.title || 'sem titulo',
            content: this.state.value
          }
        }

        localStorage.setItem('markdown-editor', JSON.stringify(files))
        this.setState({
          isSaving: false,
          files
        })
      }
    }

    this.handleRemove = () => {
      // eslint-disable-next-line no-unused-vars
      const {[this.state.id]: id, ...files } = this.state.files

      localStorage.setItem('markdown-editor', JSON.stringify(files))
      this.setState({
        files
      })
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
        value: this.state.files[fileId].content,
        id: fileId
      })
    }
  }

  componentDidMount() {
    const files = JSON.parse(localStorage.getItem('markdown-editor'))
    this.setState({ files })
    /*const files = Object.keys(localStorage)
    this.setState({
      files: files.filter((id) => id.match(/^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/)).reduce((acc, fileId) => ({
          ...acc,
          [fileId]: JSON.parse(localStorage.getItem(fileId))
      }), {})
    })*/
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
        handleOpenFile={this.handleOpenFile}
        title={this.state.title} />
    )
  }
}

export default App
