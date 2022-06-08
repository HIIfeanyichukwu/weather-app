// import cities from 'cities.json'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Aside from './Components/Layout/Aside'
import Main from './Components/Layout/Main'

const Div = styled.div`
  display: grid;
  block-size: 100vh;
  inline-size: 100%;

  @media (min-width: 1024px) {
    grid-template-columns: minmax(300px, 20%) 1fr;
  }

  @media (min-width: 1280px) {

    grid-template-columns: minmax(400px, 25%) 1fr;

  
  }
`

function App() {
  const [country, setCountry] = useState('USA');
  const [weather, setWeather ] = useState([]);
  const [city, setCity] = useState('');
  const [fahrenheit, setFahrenheit] = useState(false);


  useEffect(() => {

    let country_data = localStorage.weather_country; 
    let lon = localStorage.weather_lon;
    let lat = localStorage.weather_lat;
    if (lon & lat) {

      fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=1723148a77444853837f03372fba544a&days=6`)
      .then(response => response.json())
      .then(data => {
        setWeather(data.data);
        setCity(data.city_name);
        setCountry(country_data);
      })
      return;
  
    }else {
    
      // Default location weather
      // Geolocation Api Stuff.
      fetch('https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh,NC&key=1723148a77444853837f03372fba544a&days=6')
      .then(response => response.json())
      .then(data => {
        setWeather(data.data);
        setCity(data.city_name);
      })
    }
  }, [])




  if (weather[0] == undefined) {
    return "loading...";
  }
  else {

    let today = weather[0];
  
    return (
      <Div className="App">
        <Aside 
          today={today} 
          city={city} 
          country={country} 
          setCity={setCity}
          setCountry={setCountry} 
          setWeather={setWeather}
          fahrenheit={fahrenheit}
        />
        <Main 
          weather={weather}
          fahrenheit={fahrenheit}
          setFahrenheit={setFahrenheit}
        />
      </Div>
    )
  }
  
}

export default App
