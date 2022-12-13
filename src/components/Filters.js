import FilterByName from "./FilterByName";

const Filters = (props) => {
    const handleSubmit = (ev) => {
        ev.preventDefault();
    };
    return (
        <section>
        <form onSubmit={handleSubmit} className="form">
        <FilterByName handleFilterName={props.handleFilterName} filterByName={props.filterByName}/>
        </form>
        </section>
    );
};
export default Filters;
