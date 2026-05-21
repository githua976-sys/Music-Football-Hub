import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./Routes/AppRoutes";

import LoginPage from "./Pages/LoginPage";

import { useAuth } from "./Context/AuthContext";

function App() {

  const { user } = useAuth();

  return (

    <BrowserRouter>

      {
        user ? (

          <AppRoutes />

        ) : (

          <LoginPage />

        )
      }

    </BrowserRouter>

  );
}

export default App;