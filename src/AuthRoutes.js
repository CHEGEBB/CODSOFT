import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./auth-pages/Login";
import Signup from "./auth-pages/Signup";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AuthRoutes;
