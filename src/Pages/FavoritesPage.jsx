import SectionHeader from "../components/shared/SectionHeader";

import MusicCard from "../components/music/MusicCard";

import TeamCard from "../components/football/TeamCard";

import MatchCard from "../components/football/MatchCard";

import { useFavorites } from "../context/FavoritesContext";

const Favorites = () => {

  const {
    favoriteSongs,
    favoriteTeams,
    favoriteMatches,
  } = useFavorites();

  return (
    <div className="space-y-12">

      {/* Hero */}
      <section className="bg-gradient-to-r from-pink-600 to-red-600 rounded-3xl p-10">

        <h1 className="text-4xl md:text-5xl font-bold text-white">

          Favorites

        </h1>

        <p className="text-white/80 mt-4 max-w-2xl">

          Your saved songs, teams, and football matches.

        </p>

      </section>

      {/* Favorite Songs */}
      <section>

        <SectionHeader
          title="Favorite Songs"
          subtitle="Music you love"
        />

        {favoriteSongs.length === 0 ? (

          <p className="text-gray-400">
            No favorite songs yet.
          </p>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {favoriteSongs.map((song, index) => (
              <MusicCard
                key={index}
                image={song.image}
                title={song.title}
                artist={song.artist}
              />
            ))}

          </div>

        )}

      </section>

      {/* Favorite Teams */}
      <section>

        <SectionHeader
          title="Favorite Teams"
          subtitle="Your football clubs"
        />

        {favoriteTeams.length === 0 ? (

          <p className="text-gray-400">
            No favorite teams yet.
          </p>

        ) : (

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {favoriteTeams.map((team, index) => (
              <TeamCard
                key={index}
                team={team.team}
                league={team.league}
                logo={team.logo}
              />
            ))}

          </div>

        )}

      </section>

      {/* Favorite Matches */}
      <section>

        <SectionHeader
          title="Favorite Matches"
          subtitle="Saved football games"
        />

        {favoriteMatches.length === 0 ? (

          <p className="text-gray-400">
            No favorite matches yet.
          </p>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {favoriteMatches.map((match, index) => (
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

        )}

      </section>

    </div>
  );
};

export default Favorites;