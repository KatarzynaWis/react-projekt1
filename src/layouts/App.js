import Header from "../components/header/Header";
import HomeSection from "../components/home_section/HomeSection";
import AboutUsSection from "../components/about_us_section/AboutUsSection";
import OfferSection from "../components/offer_section/OfferSection";
import Footer from "../components/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <Header />
      <HomeSection />
      <AboutUsSection />
      <OfferSection />
      <Footer />
    </div>
  );
}

export default App;
