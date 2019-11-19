'use strict'

import React from 'react'

const Form = ({ handleAddTodo }) => (
  <form onSubmit={handleAddTodo}>
    <input type='text' name='todo' />
    <button type='submit'>Adicionar</button>
  </form>
)

export default Form
