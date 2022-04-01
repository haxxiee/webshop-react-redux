import React from "react";
import { Outlet, Navigate } from "react-router";

const ProtectedRoute = ({ isLogged }) => {
  return isLogged ? <Outlet /> : <Navigate to={"/"} />;
};

export default ProtectedRoute;
