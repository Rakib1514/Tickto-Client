import { useSelector } from "react-redux";

const SecureGuard = ({ children }) => {
  const { user, isLoading } = useSelector((state) => state.auth);

  if (isLoading) {
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
