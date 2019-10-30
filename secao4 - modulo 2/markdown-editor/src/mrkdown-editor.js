'use strict'

import React,{ PropTypes } from 'react'

const MarkdownEditor = ({ value, handleChange, getMarkup }) => (
  <div className='editor'>
      <textarea name='textarea' value={value} onChange={handleChange} autoFocus/>
      <button type='submit'>Renderixar markup</button>

    <div className='view' dangerouslySetInnerHTML={getMarkup()}></div>
  </div>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default MarkdownEditor
