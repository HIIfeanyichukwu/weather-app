import React from 'react'
import styled from 'styled-components'
import image from '../assets/Clear.png'
import clouds from '../assets/Cloud-background.png'

const Card = styled.div`
    // padding-inline: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-block: 18px;
    // background-image: url(${clouds});
    background-color: #1e213a;
    background-repeat: no-repeat;
    background-size: 110%;
    background-position: 130% 60%;
    background-blend-mode: overlay;
    transition: .2s;
    font-family: "Raleway", sans-serif;

    .header {
        margin-block-end: 10px;
        font-size: 1rem;
        color: #e7e7eb;
        line-height: 19px;
        font-weight: 500;
    }



    .weather-card-img-container {
        inline-size: 56.44px;
        block-size: 62px;
        background-image: url(${image});
        background-size: contain;
        background-repeat: no-repeat;
        margin-block-end: 31px;
        background-position: center center;
    }

    .temps {
        display: flex;
        gap: 1rem;
        font-size: 1rem;
        line-height: 19px;
        font-weight: 500;

        .temp-hi {
            color: #e7e7eb;
        }

        .temp-lo {
            color: #a09fb1;
        }
    }

    &:hover {
        transform: scale(1.1);
        cursor: pointer;
        transition: .3s;
    }
`

const WeatherCard = () => {
  return (
    <Card className='weather-card'>
        <h1 className="card-header header">
            Tomorrow
        </h1>
        <div className="weather-card-img-container">

        </div>
        <p className="temps">
            <span className="temp-hi">16&deg;C</span>
            <span className="temp-lo">11&deg;C</span>
        </p>
    </Card>
  )
}

export default WeatherCard