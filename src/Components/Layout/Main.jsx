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
        grid-template-columns: repeat(auto-fit, minmax(328px, 1fr));
        gap: 48px;

        @media (min-width: 1024px) {
            grid-template-columns: repeat(2, minmax(328px, 1fr));
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
    position: absolute;
    bottom: 25px;
    right: 0;
    left: 0;

    a {
        color: inherit;
        font-weight: 700;
    }
`

const Main = () => {
  return (
    <MainElement className="main">
       <MainContainer />
    </MainElement>
  )
}

export default Main