import {  useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
   console.log('Private router user', user);
  if (loading) {
    return (
      <>
        <div className="h-screen flex justify-center items-center">
          <progress className="progress w-56"></progress>
        </div>
      </>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};

export default PrivateRoute;
