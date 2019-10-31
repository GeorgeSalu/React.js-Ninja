'use strict'

import React, { PropTypes } from 'react'

const MarkdownEditor = ({ value, handleChange, getMarkup, handleSave }) => (
  <div className='editor'>
    <button onClick={handleSave}>Salvar</button>

    <textarea name='textarea' value={value} onChange={handleChange} autoFocus />

    <div className='view' dangerouslySetInnerHTML={getMarkup()} />
  </div>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired
}

export default MarkdownEditor
