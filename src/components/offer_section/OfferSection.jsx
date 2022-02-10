import "./OfferSection.css";
import OffersList from "./OffersList";

const OfferSection = () => {
  return (
    <div className="offer-section" id="offer">
      <h2 className="offer-section__heading">Czym zajmuje się nasza firma?</h2>
      <OffersList />
    </div>
  );
};
export default OfferSection;
