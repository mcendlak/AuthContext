import { useContext } from "react";
import AuthApi from "../context/AuthApi";

const Dashboard = () => {
  const Auth = useContext(AuthApi);

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>Dashboard</h1>
      <h2>You are now logged in</h2>
      <button onClick={() => Auth.onLogOut()}>Logout</button>
    </div>
  );
};

export default Dashboard;
