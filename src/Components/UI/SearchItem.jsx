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

const SearchItem = ({city, country}) => {
  return (
    <LI>
        <Btn>
            <span>{`${city}, ${country}`}</span> <FaGreaterThan className='icon'/>
        </Btn>
    </LI>
  )
}

export default SearchItem