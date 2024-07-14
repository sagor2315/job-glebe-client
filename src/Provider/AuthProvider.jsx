import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/Firebase.config";
// import useAxiosForSecurity from "../Hooks/useAxiosForSecurity";
import axios from "axios";
// import { Button } from "@material-tailwind/react";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loader, setLoader] = useState(true);

  // const axiosForSecurity = useAxiosForSecurity();

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    // setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signWithGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  const LogOutUser = () => {
    setLoader(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const presentUser = { email: userEmail };
      setUser(currentUser);
      console.log("Observing current user", currentUser);
      setLoader(false);
      if (currentUser) {
        axios
          .post(
            "   https://b8a11-server-side-md-zahidul-islam15-mdzahidulislam15.vercel.app/jwt",
            presentUser,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            const data = res.data;
            console.log(data);
          });
      } else {
        axios
          .post(
            "   https://b8a11-server-side-md-zahidul-islam15-mdzahidulislam15.vercel.app/logout",
            presentUser,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            const data = res.data;
            console.log(data);
          });
      }
    });
    return () => {
      unSubscribe();
    };
  }, [user?.email]);

  const authInfo = {
    user,
    loader,
    createUser,
    signInUser,
    LogOutUser,
    signWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
