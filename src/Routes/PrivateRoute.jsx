import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Navigate, useLocation } from "react-router";
import groovyWalk from "../assets/groovywalk.json";
import Lottie from "lottie-react";
const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  if (loading)
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Lottie animationData={groovyWalk} loop={true} className="w-72 h-72" />
        <p className="mt-4 text-lg font-semibold animate-pulse">
          Loading user info...
        </p>
      </div>
    );
  if (!user)
    return <Navigate state={location?.pathname} to={"/login"}></Navigate>;
  return children;
};

export default PrivateRoute;
