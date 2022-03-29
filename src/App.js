import './App.css';
import sebagomap from './sebagomap.png';
import FarmStandList from './FarmStandList';
import styled from 'styled-components';
import ResponsiveMenu from './NavBar';

const FarmContainer = styled.div`
  position: fixed;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid green;
  bottom: 40px;
`;

const StyledMenu = styled.div`
  background-color: #b8c7a1;
  border: 20px solid #b8c7a1;

  ul {
    display: flex;
    justify-content: space-between;

  }

  li {
    display: inline;
    font-size: 30px;
    list-style-type: none;
    color: #000000;
    padding: 10px;
    /* border: 2px solid green; */
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 30px;
    color: solid coral;

    &:hover {
      color: white;
    }
  }
`;

function App() {
  return (
    <div className="App">
      <ResponsiveMenu
        // changeMenuOn="50px"
        menuOpenButton={<div />}
        menuCloseButton={<div />}
        menu={
          <StyledMenu>
            <ul>
              <li>
                <a href="http://localhost:3000/">Home</a>
              </li>
              <li>
                <a href="http://localhost:3000/About">Farms</a>
              </li>
              <li>
                <a href="http://localhost:3000/Map">Map</a>
              </li>
            </ul>
          </StyledMenu>
        }
      />
      <header className="Header">
        <h1>Sebago Area Market Guide</h1>
        <h4>Find farm stands and farmers markets near you</h4>
        <img src={sebagomap} className="Map-image" alt={sebagomap} />
      </header>

      <p>
        <FarmContainer className="Farm-container">
          <FarmStandList className="Farm-list" />
        </FarmContainer>
      </p>
    </div>
  );
}

export default App;
