import React from 'react'
import styled from 'styled-components'

const MainElement = styled.main`
    padding-block-start: 42px;
    background-color: #100e1d;

    img {
        inline-size: 100%;
    }
`

const Main = () => {
  return (
    <MainElement className="main">
        MainElement
    </MainElement>
  )
}

export default Main