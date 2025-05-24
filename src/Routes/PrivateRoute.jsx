import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  if (loading)
    return (
      <div className="flex justify-center items-start mt-4 min-h-[100vh]">
        <span className="loading loading-bars loading-xl  "></span>
      </div>
    );
  if (!user)
    return <Navigate state={location?.pathname} to={"/login"}></Navigate>;
  return children;
};

export default PrivateRoute;
