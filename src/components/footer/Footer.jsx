import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__text">Nazwa firmy - wszelkie prawa zastrzeżone, 2021</p>
      <div className="footer__wrapper-icons">
        <ul className="footer__icons">
          <li>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" >
              <i className="fab fa-facebook-square"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
