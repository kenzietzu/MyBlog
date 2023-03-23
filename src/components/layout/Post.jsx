import React from 'react';
import classes from './Post.module.css';

const Post = ({author, category, content, date, title}) => {
  return (
    <div className={classes.postContainer}>
      <div className={classes.postBox}>
        <div className={classes.post}>
          <h2 className={classes.title}>{title}</h2>
          <div className={classes.category}>{category}</div>
          <div className={classes.date}>{date}</div>
          <div className={classes.authorName}>{author.name}</div>
          <p className={classes.content}>{content}</p>
        </div>
      </div>
    </div>
  )
}

export default Post;