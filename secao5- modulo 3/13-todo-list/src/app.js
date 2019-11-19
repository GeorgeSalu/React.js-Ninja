'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { addTodo, toggleTodo } from 'reducers/todos/action-creators'
import Form from 'components/form'
import TodosList from 'components/todos-list'
import Filter from 'components/filter'

const App = ({ todos, handleAddTodo, handleToggleTodo }) => (
  <div>
    <Form  handleAddTodo={handleAddTodo} />

    <ul>
      {todos.map((todo) => (

        <li
          key={todo.id}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          onClick={handleToggleTodo(todo.id)}
        >

          {todo.text}
        </li>

      ))}
    </ul>

    <div>
      <h3>Mostrar</h3>
      <span>Todos</span> | <a href=''>Finalizados</a> | <a href=''>A fazer</a>
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
  handleAddTodo: (e) => {
    e.preventDefault()
    dispatch(addTodo(e.target.todo.value))
    e.target.todo.value = ''
  },

  handleToggleTodo: (id) => (e) => {
    dispatch(toggleTodo(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
