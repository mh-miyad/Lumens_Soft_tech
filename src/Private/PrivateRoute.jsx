import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Spinner } from "flowbite-react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, isAdmin, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen bg-gray-500'>
        <Spinner color={"purple"} size={"xl"} className='' />
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to='/login' state={{ from: location }} replace />;
};

export default PrivateRoute;
