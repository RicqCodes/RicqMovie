import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import useAuthStatus from "../hooks/useAuthStatus";
import Skeleton from "./Skeleton";

const PrivateRouter = () => {
  const { loggedIn, loading } = useAuthStatus();

  if (loading) {
    return <Skeleton type={"login"} />;
  }

  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
