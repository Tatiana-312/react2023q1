import React from 'react';
import classes from './FetchDataError.module.css';

const FetchDataError: React.FC = () => {
  return (
    <div className={classes.error__container}>
      <img
        className={classes.error__img}
        src="https://www.pngitem.com/pimgs/m/166-1666153_rick-y-morty-png-transparent-png.png"
        alt="Oops!"
      />
      <p className={classes.error__text}>Character cannot be found!</p>
      <p className={classes.error__text}>Please enter the name of an existing character:</p>
      <p className={classes.error__text_example}>Rick, Morty, Jerry, Beth , Alien and so on</p>
    </div>
  );
};

export default FetchDataError;
