'use strict'

import React from 'react'
import styled from 'styled-components'

import 'normalize.css'
import 'milligram'

const App = () => (
  <div>
    <Header>
      <h1>Reactflix</h1>
    </Header>

    <main>
      Conteudo
    </main>

    <Footer>
      &copy; 2018
    </Footer>
  </div>
)

const Header = styled.header`
  height: 60px;
  background: #333
`

const Footer = styled.footer`
  height: 30px;
  background: #333
`

export default App
