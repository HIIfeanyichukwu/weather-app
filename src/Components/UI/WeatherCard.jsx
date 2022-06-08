import React from 'react'
import styled from 'styled-components'
import image from '../../assets/Clear.png'
import { format } from 'date-fns'

import { 
    heavyCloud,  
    thunderStorm,
    lightRain,
    heavyRain,
    shower,
    snow,
    heavySnow,
    sleet,
    clear,
    lightClouds,
    toFah
} from '../../util'

import cl from '../../assets/Clear.png'
import hc from '../../assets/HeavyCloud.png'
import hr from '../../assets/HeavyRain.png'
import lr from '../../assets/LightRain.png'
import hs from '../../assets/HeavySnow.png'
import lc from '../../assets/LightCloud.png'
import sh from '../../assets/Shower.png'
import sl from '../../assets/Sleet.png'
import s  from '../../assets/Snow.png'
import th from '../../assets/Thunderstorm.png'

const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-block: 18px;
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
        background-image: url(${props => props.Image});
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

const WeatherCard = ({data, nextday, fahrenheit}) => {
    let date = format(new Date(data.datetime), "iii, d MMM");
    let nextday_f = format(new Date(nextday), "iii, d MMM");
    let weatherCode = data.weather.code;
    let weatherImage;
    if (heavyCloud.includes(weatherCode)) {
        weatherImage = hc
    }else if (thunderStorm.includes(weatherCode))
    {
        weatherImage = th;
    }else if (lightRain.includes(weatherCode)) {
        weatherImage = lr;
    }else if (heavyRain.includes(weatherCode))
    {
        weatherImage = hr;
    }else if (shower.includes(weatherCode))
    {
        weatherImage = sh;
    }else if (snow.includes(weatherCode))
    {
        weatherImage = s;
    }else if (heavySnow.includes(weatherCode))
    {
        weatherImage = hs;
    }else if (sleet.includes(weatherCode))
    {
        weatherImage = sl;
    }else if (clear.includes(weatherCode))
    {
        weatherImage = cl;
    }else if (lightClouds.includes(weatherCode))
    {
        weatherImage = lc;
    }else {
        weatherImage = hc;
    }

    let cel = <span>&deg;C</span>
    let fah = <span>&deg;F</span>

    return (
        <Card className='weather-card' Image={weatherImage}>
            <h1 className="card-header header">
                {date == nextday_f ? "Tomorrow" : date}
            </h1>
            <div className="weather-card-img-container">

            </div>
            <p className="temps">
                <span className="temp-hi">
                    {(fahrenheit) ? toFah(data.high_temp) : data.high_temp}
                    {(fahrenheit) ? fah : cel}
                </span>
                <span className="temp-lo">
                    {(fahrenheit) ? toFah(data.low_temp) : data.low_temp}
                    {(fahrenheit) ? fah : cel}
                </span>
            </p>
        </Card>
    )       
}

export default WeatherCard