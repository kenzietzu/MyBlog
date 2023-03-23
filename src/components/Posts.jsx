import React from 'react';
import classes from './Posts.module.css';
import Main from './layout/Main';
import Side from './layout/Side';


const Posts = () => {

  return (
    <div className={classes.container}>
      <Main />
      <Side />
    
    </div>
  )
}

export default Posts;