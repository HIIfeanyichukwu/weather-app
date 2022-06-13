import React from 'react'
import styled from 'styled-components'

const Load = styled.div`
    position: fixed;
    z-index: 1999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    inline-size: 100%;
    block-size: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(30,33,58,1);
    text-align: center;
    flex-direction: column;
    color: #fff;
    font-family: Arial;

    .lds-dual-ring {
        display: inline-block;
        width: 80px;
        height: 80px;
    }
    .lds-dual-ring:after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
    }
`

const Loading = () => {
  const handleTimeout = () => {
    let loadText = document.querySelector('.load_text')
    if (loadText) {
      loadText.innerText = "failed to load data, Please check your internet connection!"
      document.querySelector('.ring').style.display = 'none';
    }
        
  }
  setTimeout(handleTimeout, 20000)
  return (
    <Load>
        <div className="lds-dual-ring ring"></div>
        <p className="load_text">
            Loading weather data...
        </p>
    </Load>
  )
}

export default Loading