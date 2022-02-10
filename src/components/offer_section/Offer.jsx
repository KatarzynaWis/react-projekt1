const Offer = ({ isNew, description }) => {
  if (isNew) {
    return (
      <li className="offer-section__box offer-section__box-new">
        <div className="offer-section__box-text"><p>Nowość</p>{ description }</div>
      </li>
    );
  } else {
    return (
      <li className="offer-section__box">
        <div className="offer-section__box-text">{description}</div>
      </li>
    );
  }
};
export default Offer;
