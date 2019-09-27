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

export default Title