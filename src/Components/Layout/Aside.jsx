import React from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import {MdGpsFixed, MdRoom} from 'react-icons/md'
import {BsDot} from 'react-icons/bs'
import cloud from '../../assets/Cloud-background.png'
// import lightcloud from '../../assets/LightCloud.png'
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
    lightClouds
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

const SideBar = styled.aside`
    position: relative;
    padding-block-start: 42px;
    background-color: rgba(30, 33, 58, 1);
    background-blend-mode: overlay;
    font-family: "Raleway", sans-serif;

    .icon {
        width: 24px;
        height: 24px;
    }


    .aside-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-block-end: 31px;
        margin-inline: 46px;

        @media (min-width: 1024px) {
            margin-inline: 20px;
        }
    }

    .aside-main {
        .today-weather-image-container {
            inline-size: 100%;
            block-size: 326px;
            background-image: url(${cloud});
            background-repeat: no-repeat;
            background-color: rgba(30, 33, 58, 1);
            background-size: cover;
            background-position: 55% 500%;
            background-blend-mode: overlay;
            display: flex;
            justify-content: center;
            align-items: center;

            .weather-image {
                width: 202px;
                height: 234px;
                background-image: url(${props => props.weatherImage});
                background-size: contain;
                background-repeat: no-repeat;
            }
        }

        .weather-info {
            text-align: center;
            .temp {
                font-size: 144px;
                font-weight: 500;
                color: #e7e7eb;
                margin-block-end: 1rem;
                line-height: 167px;

                .small {
                    font-size: 48px;
                    font-weight: 300;
                    color: #a09fb1;
                }
            }
            .temp-desc {
                font-weight: 600;
                font-size: 36px;
                color: #a09fb1;
                margin-block-end: 1.5rem;
            }
            .date {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1rem;
                color: #88869d;
                font-size: 18px;
                font-weight: 500;
                margin-block-end: 33px;
            }
            .location {
                font-size: 18px;
                font-weight: 600;
                line-height: 21px;
                color: #88869d;
                margin-block-end: 52.53px;

                p {
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    justify-content: center;
                }
            }
        }
    }
`
const Button = styled.button`
    cursor: pointer;
    background-color: #6e707a;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #e7e7eb;
    font-size: 1rem;
    line-height: 19px;
    font-weight: normal;
    font-family: "Raleway", sans-serif;
    border: none;
    padding-inline: 18px;
    padding-block: 11px 10px;

    &.rounded {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 9px;
        text-indent: 100%;


        .icon {
            width: 22px;
            height: 22px;
        }
    }

    &:hover {
        background-color: rgba(100, 100, 114, 1);
    }
`

const Aside = ({today, city, country}) => {

    let date = format(new Date(today.datetime), "iii, d MMM")

    const weatherCode = today.weather.code
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


  return (
    <SideBar className="sidebar" weatherImage={weatherImage}>
        <nav className="aside-nav">
            <Button>Search for places</Button>
            <Button className='rounded' aria-label='location'>
                <MdGpsFixed />
            </Button>
        </nav>
        <main className="aside-main">
            <div className="today-weather-image-container">
                <div className="weather-image">
                </div>
            </div>
            <div className="weather-info">
                <p className='temp'>{today.temp}<span className='small'>&deg;C</span></p>
                <p className="temp-desc">
                    {today.weather.description}
                </p>
                <div className="date">
                    Today <span className="dot"><BsDot/></span> <time>{date}</time>
                </div>
                <div className="location">
                    <p>
                        <MdRoom className='icon'/> {city}, {country}
                    </p>
                </div>
            </div>
        </main>
    </SideBar>
  )
}

export default Aside