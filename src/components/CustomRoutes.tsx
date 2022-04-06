import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// context
import AuthApi from "../context/AuthApi";

// components
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";

const CustomRoutes = () => {
  const Auth = useContext(AuthApi);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            Auth.isLoggedIn ? (
              <Navigate replace to="/dashboard" />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<ProtectedRoute />} />
      </Routes>
    </Router>
  );
};

export default CustomRoutes;
