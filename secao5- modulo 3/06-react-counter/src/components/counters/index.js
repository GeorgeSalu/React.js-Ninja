'use strict'

import React from 'react'
import {Counter} from 'components/counter'

const Counters = () => (
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    {[0,0,0].map((counter) => (
      <Counter counter={counter} />
    ))}
  </div>
)

export default Counters
