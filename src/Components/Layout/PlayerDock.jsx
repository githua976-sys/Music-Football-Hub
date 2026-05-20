import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";

import { usePlayer } from "../../Context/PlayerContext";

const PlayerDock = () => {

  const {
    currentSong,
    isPlaying,
    pauseSong,
    resumeSong,
    volume,
    setVolume,
  } = usePlayer();

  return (
    <div className="h-24 bg-black border-t border-gray-800 px-6 flex items-center justify-between">

      {/* Song Info */}
      <div className="flex items-center gap-4">

        <img
          src={currentSong?.image || "https://picsum.photos/60"}
          alt="album"
          className="w-14 h-14 rounded-lg object-cover"
        />

        <div>

          <h3 className="font-semibold text-white">
            {currentSong?.title || "No song selected"}
          </h3>

          <p className="text-sm text-gray-400">
            {currentSong?.artist || "Unknown artist"}
          </p>

        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-5">

        <button className="text-gray-300">
          <SkipBack size={20} />
        </button>

        <button
          onClick={
            isPlaying
              ? pauseSong
              : resumeSong
          }
          className="bg-green-500 p-3 rounded-full text-black"
        >

          {isPlaying ? (
            <Pause size={20} fill="black" />
          ) : (
            <Play size={20} fill="black" />
          )}

        </button>

        <button className="text-gray-300">
          <SkipForward size={20} />
        </button>
      </div>

      {/* Volume */}
      <div className="flex items-center gap-3">

        <Volume2 size={20} />

        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) =>
            setVolume(e.target.value)
          }
          className="accent-green-500"
        />

      </div>
    </div>
  );
};

export default PlayerDock;