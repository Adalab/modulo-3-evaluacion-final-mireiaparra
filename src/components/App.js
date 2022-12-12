import '../styles/App.scss';
import getDataFromApi from '../services/api';
import { useEffect, useState } from 'react';
import CharactersList from './CharactersList';

function App() {
  // VARIABLES ESTADO
  const [dataCharacters, setDataCharacters] = useState([]);

  // USEEFFECT 
  useEffect(() => {
    getDataFromApi().then((cleanData) => {
      setDataCharacters(cleanData);
    })
  }, []);

  // FUNCIONES HANDLER

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML

  // HTML EN EL RETURN

  return (
    <div className="App">
      <h1 className="title">Rellename!</h1>
      <CharactersList characters={dataCharacters}/>
    </div>
  );
}

export default App;
