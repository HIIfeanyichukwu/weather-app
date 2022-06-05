// import logo from './logo.svg'
// import {countries} from 'countries-list'
// import cities from 'cities.json'
import styled from 'styled-components'
import Aside from './Components/Aside'
import Main from './Components/Main'

const Div = styled.div`
  display: grid;
  
  @media (min-width: 1440px) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    grid-template-columns: minmax(459px, 25%) 1fr;

    &::-webkit-scrollbar {
      display: none;
    }

    .sidebar::-webkit-scrollbar {
      display: none;
    }

    .sidebar {
      scrollbar-width: none;
    }
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
