const teams = [
  {
    position: 1,
    name: "Arsenal",
    points: 82,
  },
  {
    position: 2,
    name: "Manchester City",
    points: 80,
  },
  {
    position: 3,
    name: "Liverpool",
    points: 78,
  },
];

const LeagueTable = () => {
  return (
    <div className="bg-gray-900 rounded-2xl p-6">

      <h2 className="text-white text-xl font-bold mb-6">
        Premier League Table
      </h2>

      <div className="space-y-4">

        {teams.map((team) => (
          <div
            key={team.position}
            className="flex items-center justify-between border-b border-gray-800 pb-3"
          >

            <div className="flex items-center gap-4">

              <span className="text-green-400 font-bold">
                {team.position}
              </span>

              <h3 className="text-white">
                {team.name}
              </h3>

            </div>

            <p className="text-gray-300">
              {team.points} pts
            </p>

          </div>
        ))}

      </div>
    </div>
  );
};

export default LeagueTable;