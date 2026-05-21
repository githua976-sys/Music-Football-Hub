import axios from "axios";

const API = axios.create({
  baseURL: "https://v3.football.api-sports.io",
  headers: {
    "x-rapidapi-key": "8ea7be6803168f368e1be8b025e15f26",
    "x-rapidapi-host": "v3.football.api-sports.io"
  }
});

export default API;