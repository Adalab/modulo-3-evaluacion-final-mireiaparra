import CharactersItem from "./CharactersItem";

const CharactersList = ({characters}) => {
    const characterElement = characters.map((character) => {
        return <CharactersItem key={character.id} character={character}/>
    })
    return (
      <section>
        <ul>{characterElement}</ul>
      </section>
    );
}

export default CharactersList;