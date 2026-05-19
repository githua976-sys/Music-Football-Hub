import TeamCard from "./TeamCard";

const teams = [
  {
    team: "Arsenal",
    league: "Premier League",
    logo: "https://picsum.photos/100?1",
  },
  {
    team: "Barcelona",
    league: "La Liga",
    logo: "https://picsum.photos/100?2",
  },
];

const TopTeams = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

      {teams.map((team, index) => (
        <TeamCard key={index} {...team} />
      ))}

    </div>
  );
};

export default TopTeams;