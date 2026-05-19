const MatchCard = ({
  homeTeam,
  awayTeam,
  score,
  league,
  status,
}) => {
  return (
    <div className="bg-gray-900 rounded-2xl p-5 hover:bg-gray-800 transition">

      {/* League */}
      <p className="text-green-400 text-sm mb-4">
        {league}
      </p>

      {/* Teams */}
      <div className="flex items-center justify-between">

        <div className="text-center">
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
          <h3 className="font-semibold text-white">
            {awayTeam}
          </h3>
        </div>

      </div>
    </div>
  );
};

export default MatchCard;