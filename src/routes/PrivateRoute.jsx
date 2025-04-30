import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <h2>Loading........</h2>;

  if (user) return children;
  return <Navigate to="/login" state={{ from: location }} replace="true" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.element,
};

export default PrivateRoute;
