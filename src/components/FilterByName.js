const FilterByName = (props) => {
    const handleChange = (ev) => {
        props.handleFilterName(ev.target.value);
    };
    return (
       <>
           <label htmlFor="name" className="form__label">Busca un personaje</label>
            <input type="text" name="name" id="name" value={props.filterByName} onChange={handleChange} className="form__input"/>
            </>
    );
};
export default FilterByName;
