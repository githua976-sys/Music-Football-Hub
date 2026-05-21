import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import { PlayerProvider } from "./Context/PlayerContext";
import { FavoritesProvider } from "./Context/FavoriteContext";
import { AuthProvider } from "./Context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>              
      <FavoritesProvider>
        <PlayerProvider>
          <App />
        </PlayerProvider>
      </FavoritesProvider>
    </AuthProvider>

  </React.StrictMode>
);