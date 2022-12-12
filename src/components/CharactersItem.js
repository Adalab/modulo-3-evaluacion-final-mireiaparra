const CharactersItem = (props) => {
console.log(props.character);
    return (
        <li>
        <article>
            <img src={props.character.image} alt={props.character.name}/>
            <h2>{props.character.name}</h2>
            <p>{props.character.species}</p>
        </article>
        </li>
    )
};
export default CharactersItem;