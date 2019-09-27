'use strict'

import React from 'react'
import Title from './title'

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Title name='Fernando' />
      </div>
    )
  }
}

/*var App = React.createClass({
  render: function () {
    return (
        <div className="1">
            <Title name='Fernando Daciuk' />
        </div>
    )
  }
})*/

export default App