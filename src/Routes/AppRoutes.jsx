import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import MainLayout from "../Components/Layout/MainLayout";

import LoginPage from "../Pages/LoginPage";

import AboutusPage from "../Pages/AboutusPage";

import Home from "../Pages/HomePage";

import FootballPage from "../Pages/FootballPage";

import Favorites from "../Pages/FavoritesPage";

import Music from "../Pages/MusicPage";

const App = () => {

  return (

    <BrowserRouter>

      <Routes>

        {/* Login Route */}
        <Route
          path="/login"
          element={<LoginPage />}
        />

        {/* Dashboard Layout */}
        <Route element={<MainLayout />}>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/music"
            element={<Music />}
          />

          <Route
            path="/football"
            element={<FootballPage />}
          />

          <Route
            path="/favorites"
            element={<Favorites />}
          />

          <Route
            path="/about"
            element={<AboutusPage />}
          />

        </Route>

      </Routes>

    </BrowserRouter>

  );
};

export default App;