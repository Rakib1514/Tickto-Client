import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { setLoading, setUser } from "../Redux/authSlice";
import axios from "axios";
import auth from "../firebase/firebase.init";

const AuthObserver = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      dispatch(setLoading(true));

      if (currentUser) {
        try {
          const response = await axios.post("/jwt", {
            email: currentUser.email,
          });
          localStorage.setItem("access-token", response.data.token);

          const res = await axios.get(`/api/users/${currentUser.uid}`);

          dispatch(setUser(res.data.data));
        } catch (err) {
          console.error("AuthObserver error:", err);

          localStorage.removeItem("access-token");
          dispatch(setUser(null));
        }
      } else {
        localStorage.removeItem("access-token");
        dispatch(setUser(null));
      }

      dispatch(setLoading(false));
    });

    return () => unsubscribe();
  }, [dispatch]);

  return null;
};

export default AuthObserver;
