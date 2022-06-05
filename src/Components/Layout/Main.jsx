import React from 'react'
import styled from 'styled-components'
import WeatherCard from '../WeatherCard'
import {FaLocationArrow} from 'react-icons/fa'

const MainElement = styled.main`
    padding-block-start: 42px;
    background-color: #100e1d;

    img {
        inline-size: 100%;
    }
`

const Div = styled.div`
    margin-inline: 154px 123px;

    .temp-toggle {
        display: flex;
        justify-content: end;
        margin-block-end: 66px;

        .temp-toggle-btns {
            display: flex;
            gap: 12px;
        }

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

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, minmax(120px,1fr));
    gap: 26px;
    margin-block-end: 72px;
`

const Highlight = styled.section`
    font-family: "Raleway", sans-serif;
    margin-block-end: 113px;

    .title-header {
        color: #e7e7eb;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        margin-block-end: 32px;
    }

    .highlights {
        display: grid;
        grid-template-columns: repeat(2, minmax(328px, 1fr));
        gap: 48px;

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
                    transform: rotate(-180deg);

                    .icon {
                        width: 24px;
                        height: 24px;
                    }
                }
            }
        }
    }
`

const Footer = styled.footer`
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #a09fb1;
    text-align: center;
    margin-block-end: 25px;

    a {
        color: inherit;
        font-weight: 700;
    }
`

const Main = () => {
  return (
    <MainElement className="main">
        <Div className='main-container'>
            <div className="temp-toggle">
                <div className="temp-toggle-btns">
                    <Button className='light'>&deg;C</Button>
                    <Button className='dark'>&deg;F</Button>
                </div>
            </div>

            <Grid className="temp-forcast">
                <WeatherCard />
                <WeatherCard />
                <WeatherCard />
                <WeatherCard />
                <WeatherCard />
            </Grid>

            <Highlight className="today-highlight">
                <h1 className="highlight-title title-header">
                    Today's Highligts
                </h1>
                <div className="highlights">
                    <section className="section wind">
                        <h1 className="section-header header">
                            Wind status
                        </h1>
                        <p className='section-data'>
                            <span className="lg">7</span>mph
                        </p>
                        <p className="section-data-img img-wind">
                            <span className="icon-bg rotate">
                                <FaLocationArrow className='icon'/>
                            </span>
                            WSW
                        </p>
                    </section>
                    <section className="section humidity">

                        <h1 className="section-header header">
                            Humidity
                        </h1>
                        <p className='section-data'>
                            <span className="lg">84</span>%
                        </p>
                        <p className="section-data-img">
                            <label className='range-label'>
                                <span className="range-values">
                                    <span>0</span> <span>50</span> <span>100</span>
                                </span>
                                <meter id="humid" className='meter' max="100" value="75" >Humid</meter>
                                <span className="measure">%</span>
                            </label>
                        </p>

                    </section>
                    <section className="section visibility">
                        <h1 className="section-header header">
                            Visibility
                        </h1>
                        <p className='section-data'>
                            <span className="lg">6,4</span>miles
                        </p>
                    </section>
                    <section className="section air">
                        <h1 className="section-header header">
                            Air Pressure
                        </h1>
                        <p className='section-data'>
                            <span className="lg">998</span>mb
                        </p>
                    </section>
                </div>
            </Highlight>

            <Footer className="footer">
                <p className="footer-content">
                    created by <a href="https://devchallenges.io/portfolio/7heDoer">7heDoer</a> - devChallenges.io
                </p>
            </Footer>
        </Div>
    </MainElement>
  )
}

export default Main