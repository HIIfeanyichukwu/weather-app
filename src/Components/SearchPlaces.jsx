import React from 'react'
import styled from 'styled-components'
// import {MdClear} from 'react-icons/md'
import close from '../assets/close.svg'

import {countries} from 'countries-list'
import cities from 'cities.json'

const Place = styled.div`
    background-color: #1E213A;
    padding-block: 12px;
    padding-inline: 46px;
    height: 100vh;
    display: flex;
    flex-direction: column;

    
   top: 0;
   inline-size: 100%;
    
    @media (min-width: 1024px) {
    }
`

const Close = styled.button`
    align-self: end;
    align-self: flex-end;
    display: inline-block;
    text-indent: 1000%;
    color: transparent;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    width: 32px;
    height: 32px;
    border: none;
    background-size: contain;
    background-color: transparent;
    white-space: nowrap;
    cursor: pointer;


`


const SearchPlaces = ({setPlaces, setCity, setCountry, setWeather}) => {
  return (
    <Place>
        <Close
            onClick={(e) => {
                e.preventDefault()
                setPlaces(false);
                document.querySelector('.App').classList.remove('fixed');
                let main = document.querySelector('main.main').classList.remove('scroll');
            }}
            img={close}
        >close button</Close>
    </Place>
  )
}

export default SearchPlaces