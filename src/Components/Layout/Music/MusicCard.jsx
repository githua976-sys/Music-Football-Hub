import { Play, Heart } from "lucide-react";

import { usePlayer } from "../../../Context/PlayerContext";
import { useFavorites } from "../../../Context/FavoriteContext";

const MusicCard = ({ image, title, artist, preview }) => {

  const { playSong } = usePlayer();
  const { favoriteSongs, addSong, removeSong } = useFavorites();

  const song = {
    image,
    title,
    artist,
    preview,
  };

  const isFavorited = favoriteSongs.some((s) => s.title === title);

  const canPlay = Boolean(preview);

  const handleFavoriteToggle = (e) => {
    e.stopPropagation();
    if (isFavorited) {
      removeSong(title);
    } else {
      addSong(song);
    }
  };

  return (
    <div className="bg-gray-900 rounded-2xl p-4 hover:bg-gray-800 transition group cursor-pointer">

      <div className="relative overflow-hidden rounded-xl">

        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover rounded-xl"
        />

        {/* Play Button */}
        <button
          onClick={() => canPlay && playSong(song)}
          disabled={!canPlay}
          className={`absolute bottom-3 right-3 bg-green-500 p-3 rounded-full opacity-0 group-hover:opacity-100 transition ${!canPlay ? "cursor-not-allowed opacity-50 group-hover:opacity-50" : ""}`}
          title={canPlay ? "Play preview" : "Preview not available"}
        >

          <Play
            size={20}
            fill="black"
            className="text-black"
          />

        </button>

        {/* Favorite Button */}
        <button
          onClick={handleFavoriteToggle}
          className="absolute top-3 right-3 bg-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
          title={isFavorited ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart
            size={18}
            className={isFavorited ? "text-red-500 fill-red-500" : "text-white"}
          />
        </button>
      </div>

      <div className="mt-4">

        <h3 className="text-white font-semibold">
          {title}
        </h3>

        <p className="text-gray-400 text-sm mt-1">
          {artist}
        </p>

      </div>
    </div>
  );
};

export default MusicCard;