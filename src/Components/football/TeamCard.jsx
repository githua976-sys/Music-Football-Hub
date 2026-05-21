import { Heart } from "lucide-react";
import { useFavorites } from "../../Context/FavoriteContext";

const TeamCard = ({ logo, team, league }) => {
  const { favoriteTeams, addTeam, removeTeam } = useFavorites();

  const isFavorited = favoriteTeams.some((t) => t.team === team);

  const handleFavoriteToggle = () => {
    if (isFavorited) {
      removeTeam(team);
    } else {
      addTeam({ team, league, logo });
    }
  };

  return (
    <div className="bg-gray-900 rounded-2xl p-5 hover:bg-gray-800 transition cursor-pointer group relative">
      <div className="flex flex-col items-center text-center">
        <img
          src={logo}
          alt={team}
          className="w-20 h-20 object-contain"
        />
        <h3 className="text-white font-semibold mt-4">
          {team}
        </h3>
        <p className="text-sm text-gray-400 mt-1">
          {league}
        </p>
      </div>
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
  );
};

export default TeamCard;
