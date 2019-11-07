'use strcit'

import React, { PureComponent } from 'react'

const after3s = (Wrapper) => {
  class After3s extends PureComponent {
    constructor() {
      super()
      this.state = { loading: true }
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({ loading: false })
      }, 3000)
    }

    render() {
      return this.state.loading ? <div>Carregando ....</div> : (
        <Wrapper {...this.props} />
      )
    }
  }

  return After3s
}

export default after3s
