import logo from "../images/logo.png";
const Header = () => {
  return (
    <>
      <header className="header">
        <img src={logo} alt="Logo de Rick y Morty" className="header__logo" />
      </header>
      <h1 className="header__title">Buscador de personajes de Rick y Morty</h1>
    </>
  );
};
export default Header;
