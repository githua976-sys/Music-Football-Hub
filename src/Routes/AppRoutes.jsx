import { BrowserRouter, Route, Routes } from "react-router-dom"

import MainLayout from "../components/layout/MainLayout";



import Favorites from "../pages/Favorites";
import About from "../pages/About";


import Home from "../Pages/HomePage";
import FootballPage from "../Pages/FootballPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element ={<MainLayout/>}>
         <Route path="/" element ={<Home/>}/>
          <Route path="/Music" element ={<Music/>}/>
          <Route path="/Football" element ={<FootballPage/>}/>
          <Route path="/Favorites" element ={<Favorites/>}/>
          <Route path="/About" element ={<About/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;