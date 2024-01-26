"use client";

import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import auth from "@/config/firebase/firebase.config";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // state
  const [user, setUser] = useState(null);
  const [profileUpdate, setProfileUpdate] = useState(false);
  const [Loading, setLoading] = useState(true);

  // google Provider
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login user
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  /// google user login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // sign out user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // update user
  const updateUserData = (userName, userPhotoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: userPhotoUrl,
    });
  };

  // scroll top
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //   user observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, presentUser => {
      //////////////////////////////////
      setUser(presentUser);
      console.log("USER OBSERVED ::>>", presentUser);

      //////////////////
      /// jwt block ////
      //////////////////

      /* if (presentUser) {
        // get token form server side and store in local storage
        const userInfo = { email: presentUser.email };
        axiosPublic.post("/jwt", userInfo).then(res => {
          // if token exist, then store in local storage
          if (res.data) {
            localStorage.setItem("access-token", res.data.token);
            console.log("access-token stored");
            setLoading(false);
          }
        });
      }
      // if user dose not exist, then remove stored token in local storage
      else {
        localStorage.removeItem("access-token");
        console.log("access-token removed");
        setLoading(false);
      } */
      //////////////////////////////////
    });
    return () => {
      return unSubscribe();
    };
  }, [axiosPublic, profileUpdate]);

  const data = {
    user,
    setProfileUpdate,
    profileUpdate,
    setLoading,
    Loading,
    createUser,
    logIn,
    googleLogin,
    updateUserData,
    logOut,
    scrollTop,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
