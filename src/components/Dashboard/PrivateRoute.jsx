import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const isAuthenticated = user?.role;
  if (!isAuthenticated || isAuthenticated !== "user") {
    return <Navigate to="/login" />;
  }

  return children;
};
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
