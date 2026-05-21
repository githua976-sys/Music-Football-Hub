import { useEffect, useState } from "react";
import MusicCard from "../Components/Layout/Music/MusicCard";
import SectionHeader from "../Components/Shared/SectionHeader";
import { searchSongs } from "../Services/Musicapi";


const Music = () => {

  // Default/fallback Trending Songs
  const defaultTrending = [
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

  // Default/fallback Recently Played
  const defaultRecent = [
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

  const [trendingSongs, setTrendingSongs] = useState(defaultTrending);
  const [recentSongs, setRecentSongs] = useState(defaultRecent);
  const [error, setError] = useState(null);

  const mapDeezerItem = (item) => ({
    title: item.title,
    artist: item.artist?.name || item.artist || "Unknown",
    image: item.album?.cover_medium || item.album?.cover || "https://picsum.photos/300",
  });

  useEffect(() => {
    let mounted = true;

    const fetchSongs = async () => {
      try {
        const results = await searchSongs("top");
        if (!mounted) return;
        if (Array.isArray(results) && results.length) {
          const mapped = results.map(mapDeezerItem);
          setTrendingSongs(mapped.slice(0, 4));
          setRecentSongs(mapped.slice(4, 8).length ? mapped.slice(4, 8) : defaultRecent);
        }
      } catch (err) {
        console.error("Music fetch error:", err);
        setError("Could not load music — using fallback data.");
        // keep defaults
      }
    };

    fetchSongs();

    return () => {
      mounted = false;
    };
  }, []);

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