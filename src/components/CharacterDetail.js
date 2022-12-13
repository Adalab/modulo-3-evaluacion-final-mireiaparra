import {Link, useParams} from 'react-router-dom';
const CharacterDetail = (props) => {
    const params = useParams();
    const characterFound = props.findCharacter(params.characterId);
    return (
        <section className="detail">
        <article className="detail__article">
            <img className="detail__img" src={characterFound.image} alt={characterFound.name}/>
            <div className="detail__text">
            <h2 className="detail__h2">{characterFound.name}</h2>
            <h3 className="detail__h3">{characterFound.species}</h3>
            <p className="detail__p">{characterFound.planet}</p>
            <p>{characterFound.episodes}</p>
            <p>{characterFound.status}</p>
            </div>
            <Link to='/'>Volver atrás</Link>
        </article>
        </section>
    );
};
export default CharacterDetail;