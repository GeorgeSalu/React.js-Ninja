'use strict'

import React from 'react'

const Title = (props) => {
    return (
        <h1>Ola {props.name + ' '+ props.lastName}</h1>
    )
}

/*const Title = React.createClass({
    getDefaultProps: function() {
        return {
            name: 'Desconhecido',
            lastName: 'Desconhecido'
        }
    },
    render: function() {
        return (
            <h1>Ola {this.props.name + ' - ' + this.props.lastName}</h1>
        )
    }
})*/

export default Title