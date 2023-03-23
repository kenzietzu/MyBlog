import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCm7st5yHJ5pmmNx0Zn8BCbYz27jg76Uuo",
    authDomain: "myblog-20f19.firebaseapp.com",
    projectId: "myblog-20f19",
    storageBucket: "myblog-20f19.appspot.com",
    messagingSenderId: "861643018744",
    appId: "1:861643018744:web:c1e10c79b216e7fcfd060d",
    measurementId: "G-MJFXB44W4P"
  };
  
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);