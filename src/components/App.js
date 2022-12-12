import '../styles/App.scss';
import getDataFromApi from '../services/api';
import { useEffect, useState } from 'react';
import CharactersList from './CharactersList';
import Filters from './Filters';
import userEvent from '@testing-library/user-event';

function App() {
  // VARIABLES ESTADO
  const [dataCharacters, setDataCharacters] = useState([]);
  const [filterByName, setFilterByName] = useState("");

  // USEEFFECT 
  useEffect(() => {
    getDataFromApi().then((cleanData) => {
      setDataCharacters(cleanData);
    })
  }, []);

  // FUNCIONES HANDLER
  const handleFilterName = (value) => {
    setFilterByName(value);
  }

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML
  const charactersFiltered = dataCharacters.filter((character) => character.name.toLowerCase().includes(filterByName.toLowerCase()));

  // HTML EN EL RETURN

  return (
    <div className="App">
      <h1 className="title">Rick y Morty</h1>
      <Filters handleFilterName={handleFilterName} filterByName={filterByName}/>
      <CharactersList characters={charactersFiltered}/>
    </div>
  );
}

export default App;
