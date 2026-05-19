import { BrowserRouter, Route, Routes } from "react-router-dom"

import MainLayout from "../components/layout/MainLayout";


import Music from "../pages/Music";



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
          <Route path="/Favorites" element ={<>}/>
          <Route path="/About" element ={<About>}/>

        </Route>
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;