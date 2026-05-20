import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import { PlayerProvider } from "./Context/PlayerContext";
import { FavoritesProvider } from "./Context/FavoriteContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FavoritesProvider>
      <PlayerProvider>
        <App />
      </PlayerProvider>
    </FavoritesProvider>
  </React.StrictMode>
);