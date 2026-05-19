import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {

  const [favoriteSongs, setFavoriteSongs] = useState([]);
  const [favoriteTeams, setFavoriteTeams] = useState([]);
  const [favoriteMatches, setFavoriteMatches] = useState([]);

  // Add Song
  const addSong = (song) => {
    setFavoriteSongs((prev) => {
      const exists = prev.find(
        (item) => item.title === song.title
      );

      if (exists) return prev;

      return [...prev, song];
    });
  };

  // Remove Song
  const removeSong = (title) => {
    setFavoriteSongs((prev) =>
      prev.filter((song) => song.title !== title)
    );
  };

  // Add Team
  const addTeam = (team) => {
    setFavoriteTeams((prev) => {
      const exists = prev.find(
        (item) => item.team === team.team
      );

      if (exists) return prev;

      return [...prev, team];
    });
  };

  // Remove Team
  const removeTeam = (teamName) => {
    setFavoriteTeams((prev) =>
      prev.filter((team) => team.team !== teamName)
    );
  };

  // Add Match
  const addMatch = (match) => {
    setFavoriteMatches((prev) => {
      const exists = prev.find(
        (item) =>
          item.homeTeam === match.homeTeam &&
          item.awayTeam === match.awayTeam
      );

      if (exists) return prev;

      return [...prev, match];
    });
  };

  // Remove Match
  const removeMatch = (match) => {
    setFavoriteMatches((prev) =>
      prev.filter(
        (item) =>
          item.homeTeam !== match.homeTeam ||
          item.awayTeam !== match.awayTeam
      )
    );
  };

  return (
    <FavoritesContext.Provider
      value={{
        favoriteSongs,
        favoriteTeams,
        favoriteMatches,

        addSong,
        removeSong,

        addTeam,
        removeTeam,

        addMatch,
        removeMatch,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

// Custom Hook
export const useFavorites = () =>
  useContext(FavoritesContext);