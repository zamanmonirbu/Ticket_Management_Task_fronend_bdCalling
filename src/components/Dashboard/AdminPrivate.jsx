import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types"; 

const AdminPrivate = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  if (!user || user.role !== 'admin') {
    return <Navigate to="/login" />;
  }
  return children;
};

AdminPrivate.propTypes = {
  children: PropTypes.node.isRequired, 
};

export default AdminPrivate;
