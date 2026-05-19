import SectionHeader from "../components/shared/SectionHeader";

import MusicCard from "../components/music/MusicCard";

import MatchCard from "../components/football/MatchCard";

import TeamCard from "../components/football/TeamCard";

const Home = () => {

  // Mock Music Data
  const songs = [
    {
      title: "Blinding Lights",
      artist: "The Weeknd",
      image: "https://picsum.photos/300?1",
    },

    {
      title: "Starboy",
      artist: "The Weeknd",
      image: "https://picsum.photos/300?2",
    },

    {
      title: "As It Was",
      artist: "Harry Styles",
      image: "https://picsum.photos/300?3",
    },

    {
      title: "Calm Down",
      artist: "Rema",
      image: "https://picsum.photos/300?4",
    },
  ];

  // Mock Matches
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
      awayTeam: "Madrid",
      score: "1 - 1",
      league: "La Liga",
      status: "LIVE",
    },
  ];

  // Mock Teams
  const teams = [
    {
      team: "Arsenal",
      league: "Premier League",
      logo: "https://picsum.photos/100?5",
    },

    {
      team: "Barcelona",
      league: "La Liga",
      logo: "https://picsum.photos/100?6",
    },

    {
      team: "Manchester City",
      league: "Premier League",
      logo: "https://picsum.photos/100?7",
    },

    {
      team: "Bayern Munich",
      league: "Bundesliga",
      logo: "https://picsum.photos/100?8",
    },
  ];

  return (
    <div className="space-y-12">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-emerald-700 rounded-3xl p-10">

        <h1 className="text-4xl md:text-5xl font-bold text-white">

          Music & Football Hub

        </h1>

        <p className="text-white/80 mt-4 max-w-2xl">

          Stream your favorite music and follow live football updates all in one place.

        </p>

      </section>

      {/* Trending Music */}
      <section>

        <SectionHeader
          title="Trending Music"
          subtitle="Top tracks this week"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {songs.map((song, index) => (
            <MusicCard
              key={index}
              image={song.image}
              title={song.title}
              artist={song.artist}
            />
          ))}

        </div>

      </section>

      {/* Live Matches */}
      <section>

        <SectionHeader
          title="Live Matches"
          subtitle="Football happening now"
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

    </div>
  );
};

export default Home;