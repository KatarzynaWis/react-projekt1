const TeamMember = ({ id, fullName, position, description, photo }) => {
  return (
    <div
      className={
        id%2 !== 0
          ? "about-us-section__team-member"
          : "about-us-section__team-member about-us-section__team-member--even"
      }>
      <div>
        <img className="about-us-section__photo" src={photo}/>
      </div>
      <div
        className={
          id%2 !== 0
            ? "about-us-section__description--odd"
            : "second-section__description--even"
        }>
        <p className="about-us-section__name-position">
          {fullName} - {position}
        </p>
        <br />
        <p className="about-us-section__text">{description}</p>
      </div>
    </div>
  );
};
export default TeamMember;
