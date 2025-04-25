import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const SecureGuard = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <h2>Loading in secure guard</h2>;
  }

  if (!user) {
    return <h2>Please sign in first</h2>;
  }

  if (user) {
    return children;
  }
};

export default SecureGuard;
