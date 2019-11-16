'use strict'

import React from 'react'
import { connect } from  'react-redux'

const App = (props) => (
  <div>
    <form onSubmit={handleAddTodo}>
      <input type='text' name='todo'/>
      <button type='submit'>Adicionar</button>
    </form>


    <ul>
      <li style={{ textDecoration: 'line-through' }}>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>

    <div>
      <h3>Mostrar</h3>
      <span>Todos</span> | <a href=''>Finalizados</a> | <a href=''>A fazer</a>
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  todos: state
})

export default connect(mapStateToProps)(App)
