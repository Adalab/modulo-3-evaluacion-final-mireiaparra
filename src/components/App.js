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
  const [filterBySpecies, setFilterBySpecies] = useState("all");
  const [filterByPlanet, setFilterByPlanet] = useState([]);

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
  const handleFilterSpecies = (value) => {
    setFilterBySpecies(value);
  };
  const handleReset = (ev) => {
    ev.preventDefault();
    setFilterBySpecies("all");
    setFilterByName("");
    setFilterByPlanet([]);
  };

  const handleFilterPlanet = (value) => {
    if (filterByPlanet.includes(value)) {
      const position = filterByPlanet.indexOf(value);
      filterByPlanet.splice(position, 1);
      setFilterByPlanet([...filterByPlanet]);
    } else {
      setFilterByPlanet([...filterByPlanet, value]);
    }
  }

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML
  const charactersFiltered = dataCharacters
  .filter((character) =>
    character.name.toLowerCase().includes(filterByName.toLowerCase())
  )
  .filter((character) => 
  filterBySpecies === "all" ? true : character.species === filterBySpecies
 )
 .filter((character) => {
  if(filterByPlanet.length === 0) {
    return true;
  } else 
  return filterByPlanet.includes(character.planet);
}
 );

  const findCharacter = (id) => {
    return dataCharacters.find((character) => character.id === parseInt(id));
  };

  const getPlanets = () => {
    const characterPlanets = dataCharacters.map((character) => character.planet);
    const uniquePlanets = characterPlanets.filter((planet, index) => {
      return characterPlanets.indexOf(planet) === index;
    });
    return uniquePlanets;
  };

  // HTML EN EL RETURN

  return (
    <div className="App">
      <Header />
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters
                handleFilterName={handleFilterName}
                filterByName={filterByName} handleFilterSpecies={handleFilterSpecies} filterBySpecies={filterBySpecies} handleReset={handleReset} planets={getPlanets()} handleFilterPlanet={handleFilterPlanet} filterByPlanet={filterByPlanet}
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
      </main>
    </div>
  );
}

export default App;
