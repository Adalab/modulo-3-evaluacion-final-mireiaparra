import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";

const Filters = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <section>
      <form onSubmit={handleSubmit} className="form">
        <FilterByName
          handleFilterName={props.handleFilterName}
          filterByName={props.filterByName}
        />
        <FilterBySpecies
          handleFilterSpecies={props.handleFilterSpecies} filterBySpecies={props.filterBySpecies}
        />
        <button onClick={props.handleReset}>Reset</button>
      </form>
    </section>
  );
};
export default Filters;
