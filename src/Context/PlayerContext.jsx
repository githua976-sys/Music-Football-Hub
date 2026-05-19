import { createContext, useContext, useState } from "react";

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {

  const [currentSong, setCurrentSong] = useState(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const [volume, setVolume] = useState(50);

  // Play Song
  const playSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  // Pause Song
  const pauseSong = () => {
    setIsPlaying(false);
  };

  // Resume Song
  const resumeSong = () => {
    setIsPlaying(true);
  };

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        volume,
        setVolume,
        playSong,
        pauseSong,
        resumeSong,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

// Custom Hook
export const usePlayer = () => useContext(PlayerContext);