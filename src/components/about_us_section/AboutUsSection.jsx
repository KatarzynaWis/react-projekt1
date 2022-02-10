import "./AboutUsSection.css";
import TeamList from "./TeamList";

const AboutUsSection = () => {
  return (
    <div className="about-us-section" id="about">
      <h2 className="about-us-section__heading">Nasi specjaliści</h2>
      <TeamList />
    </div>
  );
};
export default AboutUsSection;
