'use strict'

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import SearchCep from './search-cep'
import ajax from '@fdaciuk/ajax'
import { fetchAddress } from 'reducers/address/action-creators'

class SearchCepContainer extends PureComponent {

  state = { isFetching: false }

  handleSubmit = async (e) => {
    e.preventDefault()
    this.setState({ isFetching: true })

    const cep = e.target.cep.value
    fetchAddress(cep)

  }

  render () {
    return (
      <SearchCep
        {...this.state}
        {...this.state.address}
        handleSubmit={this.handleSubmit} />
    )
  }
}

const mapStateToProps = (state) => ({
  address: state.address
})

const mapDispatchToProps = (dispatch) => ({
  updateAddress: (data) => dispatch(updateAddress(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchCepContainer)
