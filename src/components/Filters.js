import FilterByPlanet from "./FilterByPlanet";
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
        <FilterByPlanet planets={props.planets} handleFilterPlanet={props.handleFilterPlanet} filterByPlanet={props.filterByPlanet}/>
      </form>
      <button className="form__reset" onClick={props.handleReset}>Reset</button>
    </section>
  );
};
export default Filters;
