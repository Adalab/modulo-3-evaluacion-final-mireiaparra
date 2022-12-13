import { Link } from 'react-router-dom';
const CharacterItem = (props) => {
    return (
        <Link to={`character/${props.character.id}`}>
        <li>
        <article className="list__article">
            <img className="list__img"src={props.character.image} alt={props.character.name}/>
            <h2 className="list__name">{props.character.name}</h2>
            <h3>{props.character.species}</h3>
        </article>
        </li>
        </Link>
    )
};
export default CharacterItem;