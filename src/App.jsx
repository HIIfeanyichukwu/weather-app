// import logo from './logo.svg'
// import {countries} from 'countries-list'
// import cities from 'cities.json'
import styled from 'styled-components'
import Aside from './Components/Aside'
import Main from './Components/Main'

const Div = styled.div`
  display: grid;
  
  @media (min-width: 1440px) {
    grid-template-columns: minmax(459px, 25%) 1fr;
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