'use strict'

import React from 'react'

const Search = () => (
  <div className='search'>
    <input
      type='search'
      placeholder='Digite o nome do usuario do github'
      onChange={(e) => {
        console.log('change', e.target.value)
      }}
      />
  </div>
)

export default Search
