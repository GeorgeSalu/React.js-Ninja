'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from 'reducers/todos/action-creators'

const TodoList = ({ todos,activeFilter , handleToggleTodo }) => (
  <ul>
    {getVisibleTodos(todos, activeFilter).map((todo) => (

      <li
        key={todo.id}
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={handleToggleTodo(todo.id)}
      >

        {todo.text}
      </li>

    ))}
  </ul>
)

const getVisibleTodos = (todos, activeFilter) => {

}

const mapStateToProps = (state) => ({
  todos: state.todos,
  activeFilter: state.visibilityFilter
})

const mapDispatchToProps = (dispatch) => ({
  handleToggleTodo: (id) => (e) => {
    dispatch(toggleTodo(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
