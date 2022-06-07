import React from 'react'
import styled from 'styled-components'

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

const FooterCompoent = () => {
  return (
    <Footer className="footer">
        <p className="footer-content">
            created by <a href="https://devchallenges.io/portfolio/7heDoer">7heDoer</a> - devChallenges.io
        </p>
    </Footer>
  )
}

export default FooterCompoent