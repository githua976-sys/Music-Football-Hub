import axios from "axios";

const API_KEY = "8ea7be6803168f368e1be8b025e15f26";
const BASE_URL = "https://v3.football.api-sports.io";

export const getPremierLeagueMatches = async () => {

  const response = await axios.get(

    `${BASE_URL}/fixtures`,

    {
      headers: {
        "x-apisports-key": API_KEY,
      },

      params: {
        league: 39,
        season: 2025,
      },
    }
  );

  return response.data.response.map((fixture) => ({
    id: fixture.fixture?.id,
    homeTeam: fixture.teams?.home?.name,
    homeLogo: fixture.teams?.home?.logo,
    awayTeam: fixture.teams?.away?.name,
    awayLogo: fixture.teams?.away?.logo,
    score: `${fixture.goals?.home ?? 0} - ${fixture.goals?.away ?? 0}`,
    league: fixture.league?.name,
    status: fixture.fixture?.status?.short || fixture.fixture?.status?.long || "N/A",
  }));
};