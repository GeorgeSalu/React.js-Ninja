'use strict'

import React from 'react'

const Title = React.createClass({
    getDefaultProps: function() {
        return {
            name: 'Desconhecido'
        }
    },
    render: function() {
        return (
            <h1>Ola {this.props.name}</h1>
        )
    }
})

export default Title