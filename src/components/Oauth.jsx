import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";
import GoogleIcons from "@mui/icons-material/Google";

import { OauthContainer } from "../styles/Oauth.styled";

const Oauth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onGoogleClick = async () => {
    try {
      // Initiate google signin
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      //Check for user
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      // If there are no user, create user
      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          timeStamp: serverTimestamp(),
        });
        updateProfile(auth.currentUser, {
          photoURL: `https://avatars.dicebear.com/api/bottts/${user.email}.svg`,
        });
        navigate("/plan");
      } else {
        navigate("/browse");
      }
    } catch (err) {
      toast.error("Failed to authorize with Google!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <OauthContainer>
      <p>Sign {location.pathname === "/signup" ? "Up" : "In"} with</p>
      <div onClick={onGoogleClick}>
        <GoogleIcons />
      </div>
    </OauthContainer>
  );
};

export default Oauth;
