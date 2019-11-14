'use strict'

import React from 'react'
import {Counter} from 'components/counter'
import { connect } from 'react-redux'
import { ADD_COUNTER } from 'reducers/counters'

const Counters = ({ counters, addCounter }) => (
  <div>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {counters.map((counter, index) => (
        <Counter
          key={index}
          counter={counter}
        />
      ))}
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 10 }}>
      <button onClick={addCounter}>Adicionar contador</button>
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  counters: state
})

const mapDispatchToProps = (dispatch) => ({
  addCounter: () => dispatch({ type: ADD_COUNTER })
})


export default connect(mapStateToProps, mapDispatchToProps)(Counters)
