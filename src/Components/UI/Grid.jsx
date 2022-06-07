import React from 'react'
import styled from 'styled-components';

import WeatherCard from '../UI/WeatherCard'



const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px,1fr));
    gap: 26px;
    margin-block-end: 72px;
    margin-inline: 54px;

    @media (min-width: 375px) {
        grid-template-columns: repeat(2, minmax(120px,1fr));
    }

    @media (min-width: 420px) {
        grid-template-columns: repeat(auto-fill, minmax(120px,1fr));
    }
    
    @media (min-width: 1024px) {
        grid-template-columns: repeat(auto-fit, minmax(120px,1fr));
    }

    @media (min-width: 1280px) {
        grid-template-columns: repeat(5, minmax(120px, 1fr));
    }

`

const GridComponent = ({weatherData, tomorrowDate}) => {
  return (
    <Grid className="temp-forcast">
        {
            weatherData.map(data => 
                <WeatherCard 
                    key={data.valid_date} 
                    data={data} 
                    nextday={tomorrowDate}
                />
            )
        }

    </Grid>
  )
}

export default GridComponent