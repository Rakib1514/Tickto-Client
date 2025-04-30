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
  
          let res;
  
          try {
            res = await axios.get(`/api/users/${currentUser.uid}`);
          } catch (error) {
            if (error.response && error.response.status === 404) {
              const newUser = {
                uid: currentUser.uid,
                email: currentUser.email,
                name: currentUser.displayName || "No Name",
                photo: currentUser.photoURL || "",
                role: "user",
              };
              await axios.post("/api/users", newUser);
              res = await axios.get(`/api/users/${currentUser.uid}`);
            } else {
              throw error;
            }
          }
  
          dispatch(setUser(res.data.data));
        } catch (err) {
          console.error("AuthObserver error:", err);
          localStorage.removeItem("access-token");
          dispatch(setUser(null));
        }
      } else {
        // User is not logged in
        localStorage.removeItem("access-token");
        dispatch(setUser(null));
      }
  
      dispatch(setLoading(false));
    });
  
    return () => unsubscribe();
  }, [dispatch]);
  

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
  //     dispatch(setLoading(true));

  //     try {
  //       const response = await axios.post("/jwt", {
  //         email: currentUser.email,
  //       });
  //       localStorage.setItem("access-token", response.data.token);
      
  //       let res;
      
  //       try {
  //         // Attempt to fetch the user
  //         res = await axios.get(`/api/users/${currentUser.uid}`);
  //       } catch (error) {
  //         if (error.response && error.response.status === 404) {
  //           // User doesn't exist, create it
  //           const newUser = {
  //             uid: currentUser.uid,
  //             email: currentUser.email,
  //             name: currentUser.displayName || "No Name",
  //             photo: currentUser.photoURL || "",
  //             role: "user",
  //           };
  //           await axios.post("/api/users", newUser);
      
  //           // Try fetching again after creation
  //           res = await axios.get(`/api/users/${currentUser.uid}`);
  //         } else {
  //           throw error; // Re-throw other errors
  //         }
  //       }
      
  //       dispatch(setUser(res.data.data));
  //     } catch (err) {
  //       console.error("AuthObserver error:", err);
  //       localStorage.removeItem("access-token");
  //       dispatch(setUser(null));
  //     }
      

  //     // if (currentUser) {
  //     //   try {
  //     //     const response = await axios.post("/jwt", {
  //     //       email: currentUser.email,
  //     //     });
  //     //     localStorage.setItem("access-token", response.data.token);

  //     //     const res = await axios.get(`/api/users/${currentUser.uid}`);

  //     //     dispatch(setUser(res.data.data));
  //     //   } catch (err) {
  //     //     console.error("AuthObserver error:", err);

  //     //     localStorage.removeItem("access-token");
  //     //     dispatch(setUser(null));
  //     //   }
  //     // } else {
  //     //   localStorage.removeItem("access-token");
  //     //   dispatch(setUser(null));
  //     // }

  //     dispatch(setLoading(false));
  //   });

  //   return () => unsubscribe();
  // }, [dispatch]);

  return null;
};

export default AuthObserver;
