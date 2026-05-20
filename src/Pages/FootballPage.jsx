import SectionHeader from "../Components/Shared/SectionHeader";

import MatchCard from "../Components/football/MatchCard";

import TeamCard from "../Components/football/TeamCard";

import LeagueTable from "../Components/football/LeagueTable";

const Football = () => {

  // Live Matches
  const matches = [
    {
      homeTeam: "Arsenal",
      awayTeam: "Chelsea",
      score: "2 - 1",
      league: "Premier League",
      status: "LIVE",
    },

    {
      homeTeam: "Barcelona",
      awayTeam: "Real Madrid",
      score: "1 - 1",
      league: "La Liga",
      status: "LIVE",
    },

    {
      homeTeam: "Bayern",
      awayTeam: "Dortmund",
      score: "3 - 2",
      league: "Bundesliga",
      status: "LIVE",
    },

    {
      homeTeam: "PSG",
      awayTeam: "Marseille",
      score: "2 - 0",
      league: "Ligue 1",
      status: "LIVE",
    },
  ];

  // Teams
  const teams = [
    {
      team: "Arsenal",
      league: "Premier League",
      logo: "https://picsum.photos/100?21",
    },

    {
      team: "Barcelona",
      league: "La Liga",
      logo: "https://picsum.photos/100?22",
    },

    {
      team: "Manchester City",
      league: "Premier League",
      logo: "https://picsum.photos/100?23",
    },

    {
      team: "Bayern Munich",
      league: "Bundesliga",
      logo: "https://picsum.photos/100?24",
    },
  ];

  return (
    <div className="space-y-12">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-10">

        <h1 className="text-4xl md:text-5xl font-bold text-white">

          Football Center

        </h1>

        <p className="text-white/80 mt-4 max-w-2xl">

          Follow live football matches, standings, and your favorite teams.

        </p>

      </section>

      {/* Live Matches */}
      <section>

        <SectionHeader
          title="Live Matches"
          subtitle="Games happening right now"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {matches.map((match, index) => (
            <MatchCard
              key={index}
              homeTeam={match.homeTeam}
              awayTeam={match.awayTeam}
              score={match.score}
              league={match.league}
              status={match.status}
            />
          ))}

        </div>

      </section>

      {/* Top Teams */}
      <section>

        <SectionHeader
          title="Top Teams"
          subtitle="Popular football clubs"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {teams.map((team, index) => (
            <TeamCard
              key={index}
              team={team.team}
              league={team.league}
              logo={team.logo}
            />
          ))}

        </div>

      </section>

      {/* League Table */}
      <section>

        <LeagueTable />

      </section>

    </div>
  );
};

export default Football;