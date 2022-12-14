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
          handleFilterSpecies={props.handleFilterSpecies}
        />
      </form>
    </section>
  );
};
export default Filters;
