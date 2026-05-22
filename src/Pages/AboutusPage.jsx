import {
  Music,
  Trophy,
  Headphones,
  Goal,
} from "lucide-react";

const AboutPage = () => {
  return (
    <div className="space-y-12">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-emerald-700 rounded-3xl p-10">

        <h1 className="text-4xl md:text-5xl font-bold text-white">

          About Music & Football Hub

        </h1>

        <p className="text-white/80 mt-4 max-w-3xl leading-relaxed">

          Music & Football Hub is a modern entertainment platform
          that combines the excitement of football with the energy
          of music in one interactive experience.

        </p>

      </section>

      {/* Mission */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="bg-gray-900 rounded-3xl p-8">

          <div className="bg-green-500/20 w-fit p-4 rounded-2xl">

            <Music className="text-green-400" size={32} />

          </div>

          <h2 className="text-2xl font-bold text-white mt-6">

            Music Experience

          </h2>

          <p className="text-gray-400 mt-4 leading-relaxed">

            Discover trending songs, playlists, artists, and enjoy
            a smooth streaming-inspired interface designed for music lovers.

          </p>

        </div>

        <div className="bg-gray-900 rounded-3xl p-8">

          <div className="bg-blue-500/20 w-fit p-4 rounded-2xl">

            <Trophy className="text-blue-400" size={32} />

          </div>

          <h2 className="text-2xl font-bold text-white mt-6">

            Football Coverage

          </h2>

          <p className="text-gray-400 mt-4 leading-relaxed">

            Follow football matches, standings, clubs, and live scores
            from the world’s most exciting leagues.

          </p>

        </div>

      </section>

      {/* Features */}
      <section>

        <h2 className="text-3xl font-bold text-white mb-8">

          Platform Features

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Feature 1 */}
          <div className="bg-gray-900 rounded-2xl p-6">

            <Headphones
              className="text-green-400"
              size={32}
            />

            <h3 className="text-xl font-semibold text-white mt-4">

              Music Streaming

            </h3>

            <p className="text-gray-400 mt-3 text-sm">

              Listen to trending tracks and explore artists.

            </p>

          </div>

          {/* Feature 2 */}
          <div className="bg-gray-900 rounded-2xl p-6">

            <Goal
              className="text-blue-400"
              size={32}
            />

            <h3 className="text-xl font-semibold text-white mt-4">

              Live Matches

            </h3>

            <p className="text-gray-400 mt-3 text-sm">

              Stay updated with live football action.

            </p>

          </div>

          {/* Feature 3 */}
          <div className="bg-gray-900 rounded-2xl p-6">

            <Music
              className="text-pink-400"
              size={32}
            />

            <h3 className="text-xl font-semibold text-white mt-4">

              Playlists

            </h3>

            <p className="text-gray-400 mt-3 text-sm">

              Create and manage your favorite music collections.

            </p>

          </div>

          {/* Feature 4 */}
          <div className="bg-gray-900 rounded-2xl p-6">

            <Trophy
              className="text-yellow-400"
              size={32}
            />

            <h3 className="text-xl font-semibold text-white mt-4">

              Team Tracking

            </h3>

            <p className="text-gray-400 mt-3 text-sm">

              Follow your favorite football clubs and leagues.

            </p>

          </div>

        </div>

      </section>

    </div>
  );
};

export default AboutPage;