'use strict'

import React from 'react'
import styled, { injectGlobal } from 'styled-components'

import 'normalize.css'
import 'milligram'

const App = () => (
  <Container>
    <Header>
      <h1>Reactflix</h1>
    </Header>

    <Main>
      <VideosList >
        {Array.from({ length: 10 }).map((item, index) => (
          <div key={index}>
            <VideoThumb />
            <VideoTitle>titulo do video</VideoTitle>
          </div>
        ))}
      </VideosList>
    </Main>

    <Footer>
      &copy; 2018
    </Footer>
  </Container>
)

injectGlobal`
  html, body, div[data-js="app"] {
    heigth: 100%
  }
`
const headerHeigth = '60px'
const footerHeigth = '30px'

const Container = styled.div`
  heigth: 100%
`

const Header = styled.header`
  height:  ${headerHeigth}
  background: #333
`

const Main = styled.main`
  main-height:
`

const VideosList = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Video = styled.section`
  flex: 1 1 380px
`

const VideoThumb = styled.div`
  border: 1px solid #999;
  height: 150px;
`

const VideoTitle = styled.h2`
  font-size: 18px
`

const Footer = styled.footer`
  height:  ${footerHeigth}
  background: #333
`

export default App
