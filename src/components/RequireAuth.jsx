import React from 'react';
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";

const RequireAuth = ({children}) => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    if (!user) {
        navigate("/login");
    }
    return children;
}

export default RequireAuth;