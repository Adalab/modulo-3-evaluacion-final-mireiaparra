const FilterByPlanet = (props) => {
    const handleInput = (ev) => {
    props.handleFilterPlanet(ev.target.value);
  };
    const renderPlanets = () => {
        return props.planets.map((planet, index) => {
            return (<li key={index}>
            <input type="checkbox" onChange={handleInput} value={planet}/>
            <label>{planet}</label>
            </li>
        )})
    }
    return (
        <ul>
            {renderPlanets()}
        </ul>
    );
};
export default FilterByPlanet;