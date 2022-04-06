import React, { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const AuthApi = createContext({
  isLoggedIn: false,
  onLogIn: () => {},
  onLogOut: () => {},
});

export const AuthApiProvider: React.FC = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logInHandler = () => {
    Cookies.set("user", "isLoggedIn");
    setIsLoggedIn(true);
  };
  const logOutHandler = () => {
    Cookies.remove("user");
    setIsLoggedIn(false);
  };

  const readCookies = () => {
    const user = Cookies.get("user");
    if (user) setIsLoggedIn(true);
  };

  useEffect(() => {
    readCookies();
  }, []);

  return (
    <AuthApi.Provider
      value={{
        isLoggedIn,
        onLogIn: logInHandler,
        onLogOut: logOutHandler,
      }}
    >
      {props.children}
    </AuthApi.Provider>
  );
};
export default AuthApi;
