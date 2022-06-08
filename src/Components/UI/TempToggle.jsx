import React from 'react'
import styled from 'styled-components'

const Temp = styled.div`
    display: flex;
    justify-content: end;
    margin-block-end: 66px;

    .temp-toggle-btns {
        display: flex;
        gap: 12px;
    }

`

const Button = styled.button`
    cursor: pointer;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 100%;
    font-family: "Raleway", sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;

    &.light {
        background-color: #e7e7eb;
        color: #110e3c;
    }
    &.dark {
        background-color: #585676;
        color: #e7e7eb;
    }
`

const TempToggle = ({setFahrenheit}) => {

    const toFah = (e) => {
        e.preventDefault();
        setFahrenheit(true)
    }

    const toCel = (e) => {
        e.preventDefault()
        setFahrenheit(false);
    }

  return (
    <Temp className="temp-toggle">
        <div className="temp-toggle-btns">
            <Button 
                className='light'
                onClick={toCel}
            >&deg;C</Button>

            <Button 
                className='dark'
                onClick={toFah}
            >&deg;F</Button>
        </div>
    </Temp>
  )
}

export default TempToggle