'use strict'

import React from 'react'

const App = () => (
  <div>
    <input type='text' />

    <ul>
      <li style={{ textDecoration: 'line-through' }}>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>

    <div>
      <a>Todos</a> | <a>Finalizados</a> | <a href=''>A fazer</a>
    </div>
  </div>
)

export default App
