import {
  Music,
  Trophy,
  Heart,
  PlayCircle,
} from "lucide-react";

import SectionHeader from "../components/shared/SectionHeader";

import MusicCard from "../components/music/MusicCard";

import MatchCard from "../components/football/MatchCard";

const DashboardPage = () => {

  // Mock Music
  const songs = [
    {
      title: "Blinding Lights",
      artist: "The Weeknd",
      image: "https://picsum.photos/300?31",
    },

    {
      title: "Starboy",
      artist: "The Weeknd",
      image: "https://picsum.photos/300?32",
    },

    {
      title: "Calm Down",
      artist: "Rema",
      image: "https://picsum.photos/300?33",
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

  return (
    <div className="space-y-10">

      {/* Welcome Banner */}
      <section className="bg-gradient-to-r from-green-500 to-emerald-700 rounded-3xl p-10">

        <h1 className="text-4xl font-bold text-white">

          Welcome Back 👋

        </h1>

        <p className="text-white/80 mt-4">

          Explore music, follow football matches,
          and enjoy your entertainment dashboard.

        </p>

      </section>

      {/* Stats Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Music */}
        <div className="bg-gray-900 rounded-2xl p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-400">
                Songs
              </p>

              <h2 className="text-3xl font-bold text-white mt-2">
                120+
              </h2>

            </div>

            <div className="bg-green-500/20 p-4 rounded-2xl">

              <Music className="text-green-400" />

            </div>

          </div>

        </div>

        {/* Matches */}
        <div className="bg-gray-900 rounded-2xl p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-400">
                Live Matches
              </p>

              <h2 className="text-3xl font-bold text-white mt-2">
                8
              </h2>

            </div>

            <div className="bg-blue-500/20 p-4 rounded-2xl">

              <Trophy className="text-blue-400" />

            </div>

          </div>

        </div>

        {/* Favorites */}
        <div className="bg-gray-900 rounded-2xl p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-400">
                Favorites
              </p>

              <h2 className="text-3xl font-bold text-white mt-2">
                24
              </h2>

            </div>

            <div className="bg-pink-500/20 p-4 rounded-2xl">

              <Heart className="text-pink-400" />

            </div>

          </div>

        </div>

        {/* Streams */}
        <div className="bg-gray-900 rounded-2xl p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-400">
                Streams
              </p>

              <h2 className="text-3xl font-bold text-white mt-2">
                540K
              </h2>

            </div>

            <div className="bg-yellow-500/20 p-4 rounded-2xl">

              <PlayCircle className="text-yellow-400" />

            </div>

          </div>

        </div>

      </section>

      {/* Trending Music */}
      <section>

        <SectionHeader
          title="Trending Music"
          subtitle="Most played tracks"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

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
          title="Live Football"
          subtitle="Games happening now"
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

    </div>
  );
};

export default DashboardPage;