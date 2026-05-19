const TeamCard = ({ logo, team, league }) => {
  return (
    <div className="bg-gray-900 rounded-2xl p-5 hover:bg-gray-800 transition cursor-pointer">

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
    </div>
  );
};

export default TeamCard;