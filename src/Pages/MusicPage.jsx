import MusicCard from "../Components/Layout/Music/MusicCard";
import SectionHeader from "../Components/Shared/SectionHeader";


const Music = () => {

  // Trending Songs
  const trendingSongs = [
    {
      title: "Blinding Lights",
      artist: "The Weeknd",
      image: "https://picsum.photos/300?11",
    },

    {
      title: "Starboy",
      artist: "The Weeknd",
      image: "https://picsum.photos/300?12",
    },

    {
      title: "Calm Down",
      artist: "Rema",
      image: "https://picsum.photos/300?13",
    },

    {
      title: "As It Was",
      artist: "Harry Styles",
      image: "https://picsum.photos/300?14",
    },
  ];

  // Recently Played
  const recentSongs = [
    {
      title: "Essence",
      artist: "Wizkid",
      image: "https://picsum.photos/300?15",
    },

    {
      title: "Peaches",
      artist: "Justin Bieber",
      image: "https://picsum.photos/300?16",
    },

    {
      title: "Sability",
      artist: "Ayra Starr",
      image: "https://picsum.photos/300?17",
    },

    {
      title: "Mood",
      artist: "24kGoldn",
      image: "https://picsum.photos/300?18",
    },
  ];

  return (
    <div className="space-y-12">

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-10">

        <h1 className="text-4xl md:text-5xl font-bold text-white">

          Music Zone

        </h1>

        <p className="text-white/80 mt-4 max-w-2xl">

          Discover trending songs, playlists, and your favorite artists.

        </p>

      </section>

      {/* Trending Music */}
      <section>

        <SectionHeader
          title="Trending Songs"
          subtitle="Top music around the world"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {trendingSongs.map((song, index) => (
            <MusicCard
              key={index}
              image={song.image}
              title={song.title}
              artist={song.artist}
            />
          ))}

        </div>

      </section>

      {/* Recently Played */}
      <section>

        <SectionHeader
          title="Recently Played"
          subtitle="Continue listening"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {recentSongs.map((song, index) => (
            <MusicCard
              key={index}
              image={song.image}
              title={song.title}
              artist={song.artist}
            />
          ))}

        </div>

      </section>

    </div>
  );
};

export default Music;