import { Navigate } from "react-router-dom";
import { useContext } from "react";

// context
import AuthApi from "../../context/AuthApi";

// components
import LoginForm from "./LoginForm";

const Login = () => {
  const Auth = useContext(AuthApi);

  return Auth.isLoggedIn ? <Navigate to="/dashboard" replace /> : <LoginForm />;
};

export default Login;
