import React from 'react';
import classes from './Header.module.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";

const header = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
        y: 0, 
        opacity: 1,
        transition: {
            ease: 'easeInOut',
            delay: 0.1
        } },
};

const Header = () => {
    const [user] = useAuthState(auth);

    const signUserOut = async () => {
        await signOut(auth);
    };

  return (
    <div>
        <div className={classes.header}>
            
            <motion.div
                className={classes.navlink}
                initial="hidden"
                animate="visible"
                variants={header}>
                <div className={classes.navItem}><Link to="/">Posts</Link></div>
                {user && <div className={classes.navItem}><Link to="/add">Add +</Link></div>}
                {!user && <div className={classes.navItem}><Link to="/login">Log In</Link></div>}
                <div className={classes.userBox}>
                    {user && (
                    <>
                        <p> {user?.displayName} </p>
                        <button className={classes.logout} onClick={signUserOut}><Link to="/login">Log Out</Link></button>
                    </>
                    )}
                </div>
            </motion.div>
            <motion.div
                className={classes.navlink}
                initial="hidden"
                animate="visible"
                variants={header}>
                <h1>Charlie's blog</h1>
            </motion.div>
            
        </div>
        
    </div>
  )
}

export default Header;