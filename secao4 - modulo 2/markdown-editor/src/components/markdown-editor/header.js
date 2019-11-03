'use strict'

import React, { PropTypes } from 'react'

const MarkdownEditorHeader = ({ isSaving, handleRemove, handleCreate }) => (
  <header className='editor-header'>
    {isSaving !== null && (
      <p className='save-message'>
        {isSaving ? 'Salvando ...' : 'Salvo'}
      </p>
    )}

    <button onClick={handleCreate}>
      Criar novo
    </button>
    <button onClick={handleRemove} className='button-remove'>
      Remover
    </button>
  </header>
)

MarkdownEditorHeader.propTypes = {
  handleRemove: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
}

export default MarkdownEditorHeader
