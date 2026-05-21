import { BrowserRouter } from "react-router-dom";

import MainLayout from "./Components/Layout/MainLayout";

import AppRoutes from "./Routes/AppRoutes";

import LoginPage from "./Pages/LoginPage";

import { useAuth } from "./Context/AuthContext";

function App() {

  const { user } = useAuth();

  return (

    <BrowserRouter>

      {
        user ? (

          <MainLayout>

            <AppRoutes />

          </MainLayout>

        ) : (

          <LoginPage />

        )
      }

    </BrowserRouter>

  );
}

export default App;