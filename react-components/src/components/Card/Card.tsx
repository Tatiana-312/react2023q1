import React from 'react';
import classes from './Card.module.css';
import { Data } from '../../pages/Home/data.interface';

const Card: React.FC<Data> = ({ image, name, species }) => {
  return (
    <div className={classes.card} data-testid="card">
      <div className={classes.card__body}>
        <img className={classes.card__image} src={image} alt="card-image" />
        <h2 className={classes.card__title}>{name}</h2>
        <h3 className={classes.card__subtitle}>{species}</h3>
      </div>
      <button className={classes.card__button}>More</button>
    </div>
  );
};

export default Card;
