import React from 'react'
import styled from 'styled-components'

import MainContainer from '../UI/MainContainer'


const MainElement = styled.main`
    padding-block-start: 42px;
    background-color: #100e1d;
    position: relative;

    img {
        inline-size: 100%;
    }
`


const Main = ({weather, fahrenheit, setFahrenheit}) => {
  return (
    <MainElement className="main">
      <MainContainer 
        fahrenheit={fahrenheit}
        setFahrenheit={setFahrenheit}
        weather={weather} 
      />
    </MainElement>
  )
}

export default Main