import Offer from "./Offer";
import dataOffers from "./dataOffers";

const OffersList = () => {
  const list = dataOffers.map((offer) => {
    return (
      <Offer
        key={offer.id}
        isNew={offer.isNew}
        description={offer.description}
      />
    );
  });
  return <ul className="offer-section__main-wrapper">{ list }</ul>;
};
export default OffersList;
