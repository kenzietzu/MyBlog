import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import classes from './Main.module.css';
import Post from "./Post";

const Main = () => {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const response = await getDocs(postsCollectionRef);
      setPostList(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  return (
    <div className={classes.mainBox}>
      {postLists.map(post => {
        return <Post key={post.id} {...post} />
      })}
    </div>
  )
}

export default Main;