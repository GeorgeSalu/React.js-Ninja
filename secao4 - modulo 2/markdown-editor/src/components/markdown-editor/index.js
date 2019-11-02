'use strict'

import React, { PropTypes } from 'react'
import Header from './header'

const MarkdownEditor = ({ value, handleChange, getMarkup,textareaRef, ...props }) => (
  <section className='editor'>
    <Header {...props} />
    <textarea name='textarea' value={value} onChange={handleChange} autoFocus ref={textareaRef} />
    <article className='view' dangerouslySetInnerHTML={getMarkup()} />
  </section>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  isSaving: PropTypes.bool.isRequired,
  getMarkup: PropTypes.func.isRequired,
  textareaRef: PropTypes.func.isRequired
}

export default MarkdownEditor
