'use strict'

import React from 'react'
import { connect } from 'react-redux'

const Filter = () => (
  <div>
    <h3>Mostrar</h3>

    {filterItems.map((item) => {
    return <a href='' key={item} style={{ marginRight: 10 }}>{item}</a>
    })}
  </div>
)

const filterItems = ['Todos', 'Finalizados', 'A fazer']

const mapStateToProps = (state) => ({
  activeFilter: state.visibilityFilter
});

export default connect(mapStateToProps)( Filter)
