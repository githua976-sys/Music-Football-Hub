import { Heart } from "lucide-react";
import { useFavorites } from "../../Context/FavoriteContext";

const MatchCard = ({
  homeTeam,
  homeLogo,
  awayTeam,
  awayLogo,
  score,
  league,
  status,
}) => {
  const { favoriteMatches, addMatch, removeMatch } = useFavorites();

  const isFavorited = favoriteMatches.some(
    (m) => m.homeTeam === homeTeam && m.awayTeam === awayTeam
  );

  const handleFavoriteToggle = () => {
    const match = {
      homeTeam,
      homeLogo,
      awayTeam,
      awayLogo,
      score,
      league,
      status,
    };

    if (isFavorited) {
      removeMatch(match);
    } else {
      addMatch(match);
    }
  };

  return (
    <div className="bg-gray-900 rounded-2xl p-5 hover:bg-gray-800 transition relative group">
      <p className="text-green-400 text-sm mb-4">
        {league}
      </p>
      <div className="grid grid-cols-3 items-center gap-4">
        <div className="text-center">
          <img src={homeLogo} alt={homeTeam} className="mx-auto h-14 w-14 object-contain mb-2" />
          <h3 className="font-semibold text-white">
            {homeTeam}
          </h3>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-white">
            {score}
          </p>
          <span className="text-xs text-red-400">
            {status}
          </span>
        </div>
        <div className="text-center">
          <img src={awayLogo} alt={awayTeam} className="mx-auto h-14 w-14 object-contain mb-2" />
          <h3 className="font-semibold text-white">
            {awayTeam}
          </h3>
        </div>
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

export default MatchCard;
