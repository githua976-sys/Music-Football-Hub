
import axios from "axios";

const BASE_URL = "/api/deezer/search";

export const searchSongs = async (query) => {
  const response = await axios.get(`${BASE_URL}?q=${encodeURIComponent(query)}`);

  return response.data.data;
};