import {Link, useParams} from 'react-router-dom';
const CharacterDetail = (props) => {
    const params = useParams();
    const characterFound = props.findCharacter(params.characterId);
    return (
        <>
        <Link to='/'>Volver atrás</Link>
        <div className="list_container--detail">
        <article className="list__article--detail">
            <img className="list__img--detail" src={characterFound.image} alt={characterFound.name}/>
            <div className="list__text">
            <h2 className="list__name">{characterFound.name}</h2>
            <h3>{characterFound.species}</h3>
            <p>{characterFound.planet}</p>
            <p>{characterFound.episodes}</p>
            <p>{characterFound.status}</p>
            </div>
        </article>
        </div>
        </>
    );
};
export default CharacterDetail;