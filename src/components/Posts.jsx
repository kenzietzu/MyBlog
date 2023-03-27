import React, { useState } from "react";
import classes from './Posts.module.css';
import Main from './layout/Main';
import Side from './layout/Side';

const Posts = () => {
  const [postLists, setPostList] = useState([]);

  return (
    <div className={classes.container}>
      <Main setPostList={setPostList} postLists={postLists}/>
      <Side setPostList={setPostList} />
    
    </div>
  )
}

export default Posts;