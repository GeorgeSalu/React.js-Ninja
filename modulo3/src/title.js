'use strict'

import React from 'react'

const Title = ({ name, lastName }) => {
    return (
        <h1>Ola {name + ' '+ lastName}</h1>
    )
}

Title.defaultProps = {
    name: 'Desconhecido',
    lastName: 'Sem sobrenome'
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