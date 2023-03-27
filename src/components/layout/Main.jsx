import React, { useEffect } from "react";
import { 
  getDocs, collection, onSnapshot,
  query, orderBy
 } from "firebase/firestore";
import { db } from "../../config/firebase";
import classes from './Main.module.css';
import Post from "./Post";

const Main = ({setPostList, postLists}) => {
  const postsCollectionRef = collection(db, "posts");
  const q = query(postsCollectionRef, orderBy('date', 'desc'));

  // useEffect(() => {
  //   const getPosts = async () => {
  //     const response = await getDocs(q);
  //     setPostList(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };       
  //   getPosts();
  // }, []);

  useEffect(() => {
    const getPosts = () => {
      onSnapshot(q, (snapshot) => {
        setPostList(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
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