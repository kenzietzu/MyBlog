import React from 'react';
import classes from './Side.module.css';
import { 
  getDocs, collection, 
  query, where, orderBy
 } from "firebase/firestore";
 import { db } from "../../config/firebase";

const categoryList = [ 'Life', 'Work', 'Traveling', 'Entertainment', 'Coding'];

const Side = ({setPostList}) => {
  const handleTag = async (event) => {
    const postsCollectionRef = collection(db, "posts");
    const q = query(postsCollectionRef, where('category', '==', event.target.innerText) ,orderBy('date', 'desc'));
    const response = await getDocs(q);
    setPostList(response.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); 
  }

  const handleTagAll = async (event) => {
    const postsCollectionRef = collection(db, "posts");
    const q = query(postsCollectionRef, orderBy('date', 'desc'));
    const response = await getDocs(q);
    setPostList(response.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); 
  }

  return (
    <div className={classes.sideBox}>
      <h2 className={classes.sideTitle}>CATEGORIES</h2>
      <div className={classes.sideTagBox}>
        {categoryList.map(item => {
          return <div className={classes.sideTag} key={crypto.randomUUID()} onClick={handleTag}>{item}</div>
        })}
        <div className={classes.sideTag} onClick={handleTagAll}>All</div>
      </div>
    </div>
  )
}

export default Side;