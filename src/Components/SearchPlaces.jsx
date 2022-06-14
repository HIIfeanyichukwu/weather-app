import React, { lazy, Suspense, useState } from 'react'
import styled from 'styled-components'
import {MdOutlineSearch} from 'react-icons/md'
import close from '../assets/close.svg'

import {countries} from 'countries-list'
import cities from 'cities.json'


const Place = styled.div`
    background-color: #1E213A;
    padding-block: 12px;
    padding-inline: 1rem;
    block-size: 100%;
    display: flex;
    flex-direction: column;

    
    inline-size: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    // height: 100vh;
    overflow: hidden;
    
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
    // margin-inline-end: 1rem;


`

const SearchBox = styled.div`
    // position: relative;
    font-size: 1rem;
    line-height: 18px;
    display: flex;
    gap: .5rem;
    margin-block-start: 45px;
    font-family: "Raleway", sans-serif;
    margin-block-end: 52px;
    justify-content: center;


    .search_container {
        position: relative;
        display: flex;
        align-items: center;

        .search_icon {
            position: absolute;
            color: #616475;
            width: 24px;
            height: 24px;
            left: 15px;
        }

        .search_label {
            border: 0;
            clip; rect(1px, 1px, 1px, 1px);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px; 
        } 

        .search_input {
            display: block;
            block-size: 100%;
            padding-inline: 2.5rem .8rem;
            background: transparent;
            border: 1px solid #e7e7eb;
            color: #e7e7eb;
        }

        .search_input:placeholder {
            color: #616475;
        }


    }

    .search_btn {
        font-weight: 600;
        color: #e7e7eb;
        background-color: #3C47E9;
        padding-inline: 19px 14px;
        padding-block: 14px 15px;
        border: none;
        cursor: pointer;
    }

`

const UL = styled.ul`
    list-style-type: none;
    overflow-y: auto;
    margin-inline-start: 1rem;
    padding-inline-end: 1rem;
`


const SearchPlaces = ({setPlaces, setCity, setCountry, setWeather}) => {
    const [query, setQuery] = useState('0');

    const SearchItem = lazy(() => import('../Components/UI/SearchItem'))

    let searches;
    const handleSearch = (e) => {
        e.preventDefault()
        const input = document.getElementById('search_input').value;
        setQuery(input);
   
    }


    searches = cities.filter(city => city.name.toLocaleLowerCase().startsWith(query.toLocaleLowerCase()));

   
    searches = searches.map((city, index) => 
        <SearchItem 
            city={city.name} 
            country={countries[city.country].name} 
            key={`${city.name}_${index}`}
            setWeather={setWeather}
            setCountry={setCountry}
            setCity={setCity}
            setPlaces={setPlaces}
        />
    )

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

        <SearchBox>
            <div className="search_container">
                <MdOutlineSearch className='search_icon'/>
                <label htmlFor="search_input" className='search_label'>Search For Places</label>
                <input 
                    placeholder='search location' 
                    type="search" 
                    name="search_input" 
                    id="search_input" 
                    className='search_input' 
                />
            </div>
            <button 
                onClick={handleSearch}
                className="search_btn"
            >
                Search
            </button>
        </SearchBox>

        <UL>
            <Suspense>
                {searches}
            </Suspense>
        </UL>
    </Place>
  )
}

export default SearchPlaces