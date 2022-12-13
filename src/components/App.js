import "../styles/App.scss";

import getDataFromApi from "../services/api";
import { useEffect, useState } from "react";
import CharactersList from "./CharactersList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";

function App() {
  // VARIABLES ESTADO
  const [dataCharacters, setDataCharacters] = useState([]);
  const [filterByName, setFilterByName] = useState("");

  // USEEFFECT
  useEffect(() => {
    getDataFromApi().then((cleanData) => {
      setDataCharacters(cleanData);
    });
  }, []);

  // FUNCIONES HANDLER
  const handleFilterName = (value) => {
    setFilterByName(value);
  };

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML
  const charactersFiltered = dataCharacters.filter((character) =>
    character.name.toLowerCase().includes(filterByName.toLowerCase())
  );

  const findCharacter = (id) => {
    return dataCharacters.find((character) => character.id === parseInt(id));
  };

  console.log(findCharacter(1));
  // HTML EN EL RETURN

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters
                handleFilterName={handleFilterName}
                filterByName={filterByName}
              />
              <CharactersList
                characters={charactersFiltered}
                filterByName={filterByName}
              />
            </>
          }
        ></Route>

        <Route
          path="/character/:characterId"
          element={
              <CharacterDetail findCharacter={findCharacter} />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
