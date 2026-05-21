import axios from "axios";

const API_KEY = "YOUR_API_KEY";

export const getPremierLeagueMatches = async () => {

  const response = await axios.get(

    "https://v3.football.api-sports.io/fixtures",

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

  return response.data.response;
};