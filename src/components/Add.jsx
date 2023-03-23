import { React, useEffect, useState, useRef } from 'react';
import classes from './Add.module.css';
import { useAuthState } from "react-firebase-hooks/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const formRef = useRef(0);
  console.log(user);
 
  const postsCollectionRef = collection(db, 'posts');
  const handleAddPost = async(e) => {
    e.preventDefault();
    await addDoc(postsCollectionRef, {
      title,
      category,
      content,
      date,
      author: { name: auth.currentUser.displayName, id:auth.currentUser.uid},
    });
    formRef.current.reset();
  }

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);
  
  return (
    <div className={classes.container}>
      <div className={classes.containerBox}>
        <h2>Add New Post</h2>
        <form ref={formRef} className={classes.formBox}>
          <input type="text" className={classes.formText} placeholder='Title' onChange={ (e)=> {
            setTitle(e.target.value)
          }}/>
          <input type="text" className={classes.formText} placeholder='Category' onChange={ (e)=> {
            setCategory(e.target.value)
          }}/>
          <input type="date" className={classes.formTime} onChange={ (e)=> {
            setDate(e.target.value)
          }}/>
          <textarea rows="10" className={classes.formTextarea} placeholder='Write something...' onChange={ (e)=> {
            setContent(e.target.value)
          }}/>
          <button className={classes.formButton} onClick={handleAddPost}>Publish</button>
        </form>
        
      </div>
    </div>
  )
}

export default Add;