const FilterByName = (props) => {
    const handleChange = (ev) => {
        props.handleFilterName(ev.target.value);
    };
    return (
        <form>
            <label htmlFor="name">Busca un personaje</label>
            <input type="text" name="name" id="name" value={props.filterByName} onChange={handleChange}/>
        </form>
    );
};
export default FilterByName;
