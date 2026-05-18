import { BrowserRouter, Route, Routes } from "react-router-dom"

import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import Music from "../pages/Music";
import Football from "../pages/Football";
import Favorites from "../pages/Favorites";
import About from "../pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element ={<MainLayout/>}>
         <Route path="/" element ={<Home/>}/>
          <Route path="/Music" element ={<Music/>}/>
          <Route path="/Football" element ={<Football/>}/>
          <Route path="/Favorites" element ={<Favorites/>}/>
          <Route path="/About" element ={<About/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;