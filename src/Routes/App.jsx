import Home from "../Pages/HomePage";

import Navbar from "../components/Navbar"; 
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