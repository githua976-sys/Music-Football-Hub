const MatchCard = ({
  homeTeam,
  homeLogo,
  awayTeam,
  awayLogo,
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
    </div>
  );
};

export default MatchCard;