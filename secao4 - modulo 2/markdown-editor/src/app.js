'use strict'

import React,{ Component } from 'react'

import './css/style.css'

class App extends Component {
  render() {
    return (
      <div className='editor'>
        <form>
          <textarea />
          <button >Renderixar markup</button>
        </form>

        <div className='view' />
      </div>
    )
  }
}

export default App
