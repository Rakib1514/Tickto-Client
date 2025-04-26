import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { setLoading, setUser } from "../Redux/authSlice";
import axios from "axios";
import auth from "../firebase/firebase.init";

const AuthObserver = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(
          setUser({
            email: currentUser.email,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
            uid: currentUser.uid,
          })
        );
        const userInfo = { email: currentUser.email };
        axios.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
          }
        });
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
