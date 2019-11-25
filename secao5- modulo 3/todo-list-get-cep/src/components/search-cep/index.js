'use strict'

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import SearchCep from './search-cep'

class SearchCepContainer extends PureComponent {

  render () {
    return (
      <SearchCep
        {...this.state.address}
        handleSubmit={this.handleSubmit} />
    )
  }
}

const mapStateToProps = (state) => ({
  address: state.address
})

const mapDispatchToProps = (dispatch) => ({

  handleSubmit = async (e) => {
    e.preventDefault()

    this.props.fetchAddress(e.target.cep.value)
  }

})

export default connect(mapStateToProps, mapDispatchToProps)(SearchCepContainer)
