import React, { useState, useRef } from 'react';
import classes from './Add.module.css';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Add = () => {
  const navigate = useNavigate();
  const formRef = useRef(0);
 
  const postsCollectionRef = collection(db, 'posts');

  const handleAddPost = async(data) => {
    await addDoc(postsCollectionRef, {
      key: crypto.randomUUID(),
      title: data.title,
      category: data.category,
      content: data.content,
      date: data.date,
      author: { name: auth.currentUser.displayName, id:auth.currentUser.uid},
      createdAt: serverTimestamp(),
    });
    formRef.current.reset();
    alert('Post Added');
    navigate('/');
    // console.log(data.date)
  }

  const schema = yup.object().shape({
    title: yup.string().required("Title is Required!"),
    category: yup.string().required("Choose a category!"),
    date: yup.string().required("Choose a date!"),
    content: yup.string().required("Write something!"),
  });

  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(schema),
  });
  
  return (
    <div className={classes.container}>
      <div className={classes.containerBox}>
        <h2>Add New Post</h2>
        <form ref={formRef} className={classes.formBox}>
          <div className={classes.formMessage}>
            <p>{errors.title?.message}</p>
            <p>{errors.category?.message}</p>
            <p>{errors.date?.message}</p>
            <p>{errors.content?.message}</p>
          </div>
          <input type="text" className={classes.formText} placeholder='Title' {...register("title")} />
          <select  className={classes.formTime} placeholder='Category' {...register("category")} >
            <option value="">choose a category</option>
            <option value="Life">Life</option>
            <option value="Work">Work</option>
            <option value="Traveling">Traveling</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Coding">Coding</option>
          </select>
          <input type="date" className={classes.formTime} {...register("date")} />
          <textarea rows="10" className={classes.formTextarea} placeholder='Write something...' {...register("content")} />
          <button className={classes.formButton} onClick={handleSubmit(handleAddPost)}>Publish</button>
        </form>
        
      </div>
    </div>
  )
}

export default Add;