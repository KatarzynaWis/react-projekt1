import TeamMember from "./TeamMember";
import dataTeam from "./dataTeam";

const TeamList = () => {
  const list = dataTeam.map(({id, fullName, position, description, photo}) => {
    return (
      <TeamMember
        key={id}
        id={id}
        fullName={fullName}
        position={position}
        description={description}
        photo={photo}
      />
    );
  });
  return <>{list}</>;
};
export default TeamList;
