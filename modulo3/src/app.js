'use strict'

import React from 'react'
import Title from './title'

var App = React.createClass({
  render: function () {
    return (
        <div className="1">
            <Title name='Fernando Daciuk' lastName={Number('2')}/>
            <label htmlFor='input'>Input</label>
            <input type='text' id="input" />
        </div>
    )
  }
})

export default App