import React from 'react';
import classes from './Side.module.css';

const categoryList = [ 'Life', 'Work', 'Travel', 'Books', 'TV Series', 'Video Games'];

const Side = () => {
  return (
    <div className={classes.sideBox}>
      <h2 className={classes.sideTitle}>CATEGORIES</h2>
      <div className={classes.sideTagBox}>
        {categoryList.map(item => {
          return <div className={classes.sideTag}>{item}</div>
        })}
      </div>
    </div>
  )
}

export default Side;