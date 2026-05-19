import { Play } from "lucide-react";

const MusicCard = ({ image, title, artist }) => {
  return (
    <div className="bg-gray-900 rounded-2xl p-4 hover:bg-gray-800 transition group cursor-pointer">

      {/* Album Cover */}
      <div className="relative overflow-hidden rounded-xl">

        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover rounded-xl"
        />

        {/* Play Button */}
        <button className="absolute bottom-3 right-3 bg-green-500 p-3 rounded-full opacity-0 group-hover:opacity-100 transition">

          <Play
            size={20}
            fill="black"
            className="text-black"
          />

        </button>
      </div>

      {/* Song Info */}
      <div className="mt-4">

        <h3 className="text-white font-semibold truncate">
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