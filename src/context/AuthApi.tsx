import React, { createContext, useEffect, useState, useCallback } from "react";
import Cookies from "js-cookie";

const AuthApi = createContext({
  isLoggedIn: false,
  onLogIn: () => {},
  onLogOut: () => {},
});

export const AuthApiProvider: React.FC = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logInHandler = useCallback(() => {
    Cookies.set("user", "isLoggedIn");
    setIsLoggedIn(true);
  }, []);

  const logOutHandler = useCallback(() => {
    Cookies.remove("user");
    setIsLoggedIn(false);
  }, []);

  const readCookies = useCallback(() => {
    const user = Cookies.get("user");
    if (user) setIsLoggedIn(true);
  }, []);

  useEffect(() => {
    readCookies();
    // eslint-disable-next-line
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
