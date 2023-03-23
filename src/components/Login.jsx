import React from 'react';
import classes from './Login.module.css';
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Lonin = () => {
  const navigate = useNavigate();

  const logInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    navigate("/");
  };

  return (
    <div className={classes.container}>
      <div className={classes.containerBox}>
        <h2>Log In</h2>
        <div className={classes.formBox}>
          <button className={classes.formButton} onClick={logInWithGoogle}>Log in with Google</button>
        </div>
      </div>
    </div>
  )
}

export default Lonin;;