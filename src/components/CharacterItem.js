import { Link } from 'react-router-dom';
const CharacterItem = (props) => {
    return (
        <Link to={`character/${props.character.id}`}>
        <li>
        <article>
            <img src={props.character.image} alt={props.character.name}/>
            <h2>{props.character.name}</h2>
            <h3>{props.character.species}</h3>
        </article>
        </li>
        </Link>
    )
};
export default CharacterItem;