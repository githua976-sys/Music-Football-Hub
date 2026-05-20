import { BrowserRouter, Route, Routes } from "react-router-dom"

import MainLayout from "../components/layout/MainLayout";







import Home from "../Pages/HomePage";
import FootballPage from "../Pages/FootballPage";
import Favorites from "../Pages/FavoritesPage";
import Music from "../Pages/MusicPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element ={<MainLayout/>}>
         <Route path="/" element ={<Home/>}/>
          <Route path="/Music" element ={<Music/>}/>
          <Route path="/Football" element ={<FootballPage/>}/>
          <Route path="/Favorites" element ={<Favorites/>}/>
          <Route path="/About" element ={<Aboutus/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;