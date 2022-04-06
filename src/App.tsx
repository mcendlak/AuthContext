import React from "react";

import "./index.css";

// context API
import { AuthApiProvider } from "./context/AuthApi";

// components
import CustomRoutes from "./components/CustomRoutes";

export default function App() {
  return (
    <AuthApiProvider>
        <CustomRoutes />
    </AuthApiProvider>
  );
}
