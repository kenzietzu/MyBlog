import React from 'react';
import classes from './Post.module.css';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";

const Post = ({author, category, content, date, title, id}) => {
  const [user] = useAuthState(auth);
  const handleDelete = async () => {
    const postRef = doc(db, "posts", id);
    await deleteDoc(postRef);
  }

  return (
    <div className={classes.postContainer}>
      <div className={classes.postBox}>
        {user && user.uid === author.id && <div className={classes.delete} onClick={handleDelete}>X</div>}
        <div className={classes.post}>
          <h2 className={classes.title}>{title}</h2>
          <div className={classes.category}>{category}</div>
          <div className={classes.date}></div>
          <div className={classes.authorName}>{author.name}</div>
          <p className={classes.content}>{content}</p>
        </div>
      </div>
    </div>
  )
}

export default Post;