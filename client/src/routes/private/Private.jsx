import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "@selectors/auth";
import Admin from "@routes/admin/Admin";

const Private = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  return isAuthenticated ? <Admin /> : <Navigate to="/login" />;
};

export default Private;
