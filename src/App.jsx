import { BrowserRouter } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";

import AppRoutes from "./routes/AppRoutes";

import LoginPage from "./Pages/LoginPage";
import { useAuth } from "./Context/AuthContext";
function App() {

 const {user} = useAuth();

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