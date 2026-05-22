import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SectionHeader from "../Components/Shared/SectionHeader";

import MatchCard from "../Components/football/MatchCard";

import TeamCard from "../Components/football/TeamCard";

import LeagueTable from "../Components/football/LeagueTable";

import { getPremierLeagueMatches } from "../Services/Footballapi";

const Football = () => {

  const defaultMatches = [
    {
      homeTeam: "Arsenal",
      homeLogo: "https://picsum.photos/100?21",
      awayTeam: "Chelsea",
      awayLogo: "https://picsum.photos/100?22",
      score: "2 - 1",
      league: "Premier League",
      status: "LIVE",
    },
    {
      homeTeam: "Barcelona",
      homeLogo: "https://picsum.photos/100?23",
      awayTeam: "Real Madrid",
      awayLogo: "https://picsum.photos/100?24",
      score: "1 - 1",
      league: "La Liga",
      status: "LIVE",
    },
    {
      homeTeam: "Bayern",
      homeLogo: "https://picsum.photos/100?25",
      awayTeam: "Dortmund",
      awayLogo: "https://picsum.photos/100?26",
      score: "3 - 2",
      league: "Bundesliga",
      status: "LIVE",
    },
    {
      homeTeam: "PSG",
      homeLogo: "https://picsum.photos/100?27",
      awayTeam: "Marseille",
      awayLogo: "https://picsum.photos/100?28",
      score: "2 - 0",
      league: "Ligue 1",
      status: "LIVE",
    },
  ];

  const defaultTeams = [
    {
      team: "Arsenal",
      league: "Premier League",
      logo: "https://picsum.photos/100?21",
    },
    {
      team: "Barcelona",
      league: "La Liga",
      logo: "https://picsum.photos/100?22",
    },
    {
      team: "Manchester City",
      league: "Premier League",
      logo: "https://picsum.photos/100?23",
    },
    {
      team: "Bayern Munich",
      league: "Bundesliga",
      logo: "https://picsum.photos/100?24",
    },
  ];

  const [rawMatches, setRawMatches] = useState(defaultMatches);
  const [rawTeams, setRawTeams] = useState(defaultTeams);
  const [matches, setMatches] = useState(defaultMatches);
  const [teams, setTeams] = useState(defaultTeams);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();

  const buildTeamList = (matchList) => {
    const unique = new Map();

    matchList.forEach((match) => {
      if (match.homeTeam && match.homeLogo) {
        unique.set(match.homeTeam, {
          team: match.homeTeam,
          league: match.league,
          logo: match.homeLogo,
        });
      }
      if (match.awayTeam && match.awayLogo) {
        unique.set(match.awayTeam, {
          team: match.awayTeam,
          league: match.league,
          logo: match.awayLogo,
        });
      }
    });

    return Array.from(unique.values()).slice(0, 4);
  };

  useEffect(() => {
    const fetchMatches = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getPremierLeagueMatches();
        if (Array.isArray(data) && data.length) {
          const fetchedMatches = data.slice(0, 4);
          const fetchedTeams = buildTeamList(data);
          setRawMatches(fetchedMatches);
          setRawTeams(fetchedTeams);
          setMatches(fetchedMatches);
          setTeams(fetchedTeams);
        }
      } catch (err) {
        console.error("Football fetch error:", err);
        setError("Could not load football data, using fallback values.");
        setRawMatches(defaultMatches);
        setRawTeams(defaultTeams);
        setMatches(defaultMatches);
        setTeams(defaultTeams);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  useEffect(() => {
    const query = searchParams.get("query")?.trim().toLowerCase();
    if (!query) {
      setMatches(rawMatches);
      setTeams(rawTeams);
      setError(null);
      return;
    }

    const filteredMatches = rawMatches.filter((match) => {
      const home = match.homeTeam?.toLowerCase() || "";
      const away = match.awayTeam?.toLowerCase() || "";
      const league = match.league?.toLowerCase() || "";
      return home.includes(query) || away.includes(query) || league.includes(query);
    });

    const filteredTeams = rawTeams.filter((team) => {
      const teamName = team.team?.toLowerCase() || "";
      const league = team.league?.toLowerCase() || "";
      return teamName.includes(query) || league.includes(query);
    });

    setMatches(filteredMatches);
    setTeams(filteredTeams);

    if (!filteredMatches.length && !filteredTeams.length) {
      setError("No teams or matches found for that search.");
    } else {
      setError(null);
    }
  }, [searchParams, rawMatches, rawTeams]);

  return (
    <div className="space-y-12">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-10">

        <h1 className="text-4xl md:text-5xl font-bold text-white">

          Football Center

        </h1>

        <p className="text-white/80 mt-4 max-w-2xl">

          Follow live football matches, standings, and your favorite teams.

        </p>

      </section>

      {/* Live Matches */}
      <section>

        <SectionHeader
          title="Live Matches"
          subtitle="Games happening right now"
        />

        <div className="space-y-4">
          {loading && <p className="text-gray-300">Loading football matches...</p>}
          {error && <p className="text-red-400">{error}</p>}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {matches.map((match, index) => (
              <MatchCard
                key={index}
                homeTeam={match.homeTeam}
                homeLogo={match.homeLogo}
                awayTeam={match.awayTeam}
                awayLogo={match.awayLogo}
                score={match.score}
                league={match.league}
                status={match.status}
              />
            ))}
          </div>
        </div>

      </section>

      {/* Top Teams */}
      <section>

        <SectionHeader
          title="Top Teams"
          subtitle="Popular football clubs"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {teams.map((team, index) => (
            <TeamCard
              key={index}
              team={team.team}
              league={team.league}
              logo={team.logo}
            />
          ))}

        </div>

      </section>

      {/* League Table */}
      <section>

        <LeagueTable />

      </section>

    </div>
  );
};

export default Football;