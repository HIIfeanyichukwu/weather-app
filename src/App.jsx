// import {countries} from 'countries-list'
// import cities from 'cities.json'
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
  return (
    <Div className="App">
      <Aside />
      <Main />
    </Div>
  )
}

export default App
