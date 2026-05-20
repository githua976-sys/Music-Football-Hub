import AppRoutes from "./AppRoutes";
import Home from "../Pages/HomePage";

import Navbar from "../Components/Layout/Navbar"; 
function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <AppRoutes/>
      <Navbar />
      <Home  />
    </div>
  );
}

export default App;