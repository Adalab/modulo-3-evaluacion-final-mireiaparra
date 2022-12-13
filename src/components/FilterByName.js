const FilterByName = (props) => {
    const handleChange = (ev) => {
        props.handleFilterName(ev.target.value);
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit} className="form">
            <label htmlFor="name" className="form__label">Busca un personaje</label>
            <input type="text" name="name" id="name" value={props.filterByName} onChange={handleChange} className="form__input"/>
        </form>
    );
};
export default FilterByName;
