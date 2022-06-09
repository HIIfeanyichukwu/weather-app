import React from 'react'
import styled from 'styled-components'

import GridComponent from '../UI/Grid'
import FooterCompoent from './FooterCompoent'
import TempToggle from './TempToggle'
import Wind from './Highlight/Wind'
import Humidity from './Highlight/Humidity'
import Visibility from './Highlight/Visibility'
import Air from './Highlight/Air'

const Div = styled.div`
    margin-inline: 1rem;
    

    @media (min-width: 1280px) {
        margin-inline: 54px;
    }

   
`

const Highlight = styled.section`
    font-family: "Raleway", sans-serif;
    margin-block-end: 220px;

    .title-header {
        color: #e7e7eb;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        margin-block-end: 32px;
    }

    .highlights {
        display: grid;
        gap: 48px;

        @media (min-width: 1024px) {
            grid-template-columns: repeat(2, minmax(328px, 1fr));
        }

        @media (min-width: 1024px) and (max-width: 1024px) {
            gap: .8rem;
        }

        .section {
            background-color: #1E213A;
            display: grid;
            justify-content: center;
            text-align: center;
            padding-block: 22px;

            .header {
                font-weight: 500;
                font-size: 1rem;
                line-height: 19px;
                color: #e7e7eb;
                margin-block-end: 1.5rem;
            }

            .section-data {
                font-size: 36px;
                line-height: 42.26px;
                font-weight: 500;
                color: #e7e7eb;

                .lg {
                    font-size: 64px;
                    font-weight: 700;
                    line-height: 75px;
                }
            }

            .section-data-img {
                margin-block-start: 18px;

                .range-label {
                    display: grid;
                    inline-size: 229px;
                    font-size: 12px;
                    line-height: 14px;
                    font-weight: 700;
                    color: #a09fb1;

                    .range-values {
                        display: flex;
                        justify-content: space-between;
                        margin-block-end: 2px;
                    }
                    .measure {
                        justify-self: end;
                        margin-block-start: 4px;
                    }

                    .meter {
                        inline-size: 100%;
                        height: 1.2rem;
                    }

                    meter::-webkit-meter-optimum-value {
                        background: #FFEC65;
                        border-radius: 80px;
                    }

                }
            }

            .section-data-img.img-wind {
                font-size: 14px;
                font-weight: 500;
                line-height: 1rem;
                color: #e7e7eb;
                display: flex;
                gap: 6px;
                justify-content: center;
                align-items: center;

                .icon-bg {
                    background-color: #a09fb1;
                    display: flex;
                    width: 40px;
                    height: 40px;
                    border-radius: 100%;
                    justify-content: center;
                    align-items: center;
                    transform: rotate(${props => props.rotate}deg);

                    .icon {
                        width: 24px;
                        height: 24px;
                    }
                }
            }
        }
    }
`



const MainContainer = ({weather, fahrenheit, setFahrenheit}) => {
    let today = weather[0];
    let nextDate = weather[1].datetime;

    let rotate;
    switch(today.wind_cdir) {
        case 'N':
            rotate = 20;
        break;
        case 'NE':
            rotate = 360;
        break;
        case 'NW':
            rotate = 270;
        break;
        case 'E':
            rotate = 45;
        break;
        case 'SW':
            rotate = 180;
        break;
        case 'SE':
            rotate = 90;
        break;
        case 'S':
            rotate = 130;
        break;
        case 'W':
            rotate = 228;
        break;
        default:
            rotate = 300;
        break;
    }

    const kmToM = (km) => {
        let miles = km * 0.621371;
        miles = miles.toFixed(1)
        return miles;
    }

  return (
    <Div className='main-container'>

        <TempToggle setFahrenheit={setFahrenheit}/>

        <GridComponent 
            weatherData={weather.slice(1)} 
            tomorrowDate={nextDate}
            fahrenheit={fahrenheit}
        />

        <Highlight className="today-highlight" rotate={rotate}>
            <h1 className="highlight-title title-header">
                Today's Highligts
            </h1>
            <div className="highlights">
                <Wind windspeed={today.wind_spd}/>
                <Humidity humidity={today.rh}/>
                <Visibility visibility={kmToM(today.vis)}/>
                <Air pres={today.pres}/>
            </div>
        </Highlight>

        <FooterCompoent />
    </Div>
  )
}

export default MainContainer