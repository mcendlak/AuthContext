import { useContext } from "react";
import AuthApi from "../context/AuthApi";

import {Navigate} from 'react-router-dom'
import Dashboard from './Dashboard'

const ProtectedRoute = () => {
  const Auth = useContext(AuthApi);

  return (
    Auth.isLoggedIn ? 
    <Dashboard /> : 
    <Navigate to='/login' replace/>)
};

export default ProtectedRoute