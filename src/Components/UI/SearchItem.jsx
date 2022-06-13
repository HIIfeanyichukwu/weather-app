import React from 'react'
import styled from 'styled-components'
import {FaGreaterThan} from 'react-icons/fa'

const LI = styled.li`
    color: #e7e7eb;
    font-weight: 500;
    font-size: 1rem;
    line-height: 18px;
    font-family: "Raleway", sans-serif;
`

const Btn = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    inline-size: 100%;
    border: 1px solid transparent;
    background: transparent;
    color: inherit;
    padding-block: 22px;
    padding-inline: 12px;
    cursor: pointer;

    .icon {
        color: #616475;
        opacity: 0;
    }
    
    &:hover {
        border: 1px solid #616475;

        .icon {
            opacity: 1;
        }
    }
`

const SearchItem = ({city, country, setWeather, setCountry, setCity, setPlaces}) => {

    const handleClick = (e) => {
        e.preventDefault();
        import('cities.json')
        .then(cities => {

            let city_ = cities.default.filter(city_obj => city_obj.name == city)
            let country_ = city_[0].country
    
            fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&country=${country_}&key=1723148a77444853837f03372fba544a&days=6`)
            .then(response => response.json())
            .then(data => {
                setWeather(data.data);
                setCity(data.city_name);
                setCountry(country)
                setPlaces(false);
            })
    
        })
        
    }

  return (
    <LI>
        <Btn
            onClick={
                (e) => {
                    handleClick(e)
                    document.querySelector('.App').classList.remove('fixed');
                    document.querySelector('main.main').classList.remove('scroll');
                }
            }
        >
            <span>{`${city}, ${country}`}</span> <FaGreaterThan className='icon'/>
        </Btn>
    </LI>
  )
}

export default SearchItem