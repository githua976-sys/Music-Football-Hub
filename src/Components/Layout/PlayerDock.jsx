import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";

const PlayerDock = () => {
  return (
    <div className="h-24 bg-black border-t border-gray-800 px-6 flex items-center justify-between">

      {/* Current Song */}
      <div className="flex items-center gap-4">

        <img
          src="https://picsum.photos/60"
          alt="album"
          className="w-14 h-14 rounded-lg object-cover"
        />

        <div>
          <h3 className="font-semibold text-white">
            Blinding Lights
          </h3>

          <p className="text-sm text-gray-400">
            The Weeknd
          </p>
        </div>
      </div>

      {/* Player Controls */}
      <div className="flex flex-col items-center gap-2">

        <div className="flex items-center gap-5">

          <button className="text-gray-300 hover:text-white transition">
            <SkipBack size={20} />
          </button>

          <button className="bg-green-500 p-3 rounded-full text-black hover:scale-105 transition">

            <Play size={20} fill="black" />

          </button>

          <button className="text-gray-300 hover:text-white transition">
            <SkipForward size={20} />
          </button>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-3 w-[300px]">

          <span className="text-xs text-gray-400">
            1:12
          </span>

          <input
            type="range"
            className="w-full accent-green-500"
          />

          <span className="text-xs text-gray-400">
            3:45
          </span>
        </div>
      </div>

      {/* Volume */}
      <div className="flex items-center gap-3">

        <Volume2
          size={20}
          className="text-gray-300"
        />

        <input
          type="range"
          className="accent-green-500"
        />
      </div>
    </div>
  );
};

export default PlayerDock;