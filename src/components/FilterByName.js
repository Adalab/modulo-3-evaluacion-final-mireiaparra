const FilterByName = (props) => {
    const handleChange = (ev) => {
        props.handleFilterName(ev.target.value);
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Busca un personaje</label>
            <input type="text" name="name" id="name" value={props.filterByName} onChange={handleChange}/>
        </form>
    );
};
export default FilterByName;
