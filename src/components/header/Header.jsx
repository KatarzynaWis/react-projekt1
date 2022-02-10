import "./Header.css";
import Button from "./Button";

const Header = () => {
  return (
    <div className="header">
      <p className="header__logo">moja firma</p>
      <ul className="header__menu">
       <Button goToId="#about" labelText="o nas" />
        <Button goToId="#offer" labelText="oferta" />
        <Button
          disabled={true}
          goToId="#contact"
          labelText="kontakt"
        />
      </ul>
    </div>
  );
};

export default Header;
