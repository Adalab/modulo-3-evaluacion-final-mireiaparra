import {Link, useParams} from 'react-router-dom';
const CharacterDetail = (props) => {
    const params = useParams();
    console.log(params.characterId);
    const characterFound = props.findCharacter(params.characterId);
    console.log(characterFound);
    return (
        <>
        <Link to='/'>Volver atrás</Link>
        <li>
        <article>
            {/* <img src={characterFound.image} alt={characterFound.name}/>
            <h2>{characterFound.name}</h2>
            <h3>{characterFound.species}</h3>
            <p>{characterFound.planet}</p>
            <p>{characterFound.episodes}</p>
            <p>{characterFound.status}</p> */}
        </article>
        </li>
        </>
    );
};
export default CharacterDetail;