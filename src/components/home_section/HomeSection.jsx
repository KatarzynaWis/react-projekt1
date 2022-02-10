import "./HomeSection.css";

const HomeSection = () => {
  return (
    <div className="home-section">
      <h1 className="home-section__heading">
        Nasza firma oferuje najwyższej <br /> jakości produkty.
      </h1>
      <h4 className="home-section__text">Nie wierz nam na słowo - sprawdź</h4>
      <a href="#offer" className="home-section__link">
        <button className="home-section__btn">oferta</button>
      </a>
    </div>
  );
};
export default HomeSection;
