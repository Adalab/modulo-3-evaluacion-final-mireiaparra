import CharacterItem from "./CharacterItem";

const CharactersList = ({characters}) => {
    const characterElement = characters.map((character) => {
        return <CharacterItem key={character.id} character={character}/>
    })
    return (
      <section>
        <ul>{characterElement}</ul>
      </section>
    );
}

export default CharactersList;