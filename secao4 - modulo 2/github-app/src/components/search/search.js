'use strict'

import React from 'react'

import style from './search.css'

const Search = ({ isDisabled, handleSearch }) => (
  <div className='search'>
    <input
      type='search'
      placeholder='Digite o nome do usuario do github'
      disabled={isDisabled}
      onKeyUp={handleSearch}
      />
  </div>
)

Search.propTypes = {
  handleSearch: React.PropTypes.func.isRequired,
  isDisabled: React.PropTypes.bool.isRequired
}

export default Search
