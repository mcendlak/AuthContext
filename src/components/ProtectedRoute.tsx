import { useContext } from "react";
import { Navigate } from "react-router-dom";

// context
import AuthApi from "../context/AuthApi";

// components
import Dashboard from "./Dashboard";

const ProtectedRoute = () => {
  const Auth = useContext(AuthApi);

  return Auth.isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
