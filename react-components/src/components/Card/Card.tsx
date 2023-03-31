import React from 'react';
import classes from './Card.module.css';
import { Data } from '../SearchBar/data.interface';

const Card: React.FC<Data> = ({ image, name, gender, status }) => {
  return (
    <div className={classes.card} data-testid="card">
      <div className={classes.card__body}>
        <img className={classes.card__image} src={image} alt="card-image" />
        <h2 className={classes.card__title}>{name}</h2>
        <h3 className={classes.card__subtitle}>{gender}</h3>
        <p className={classes.card__description}>{status}</p>
      </div>
      <button className={classes.card__button}>Learn More</button>
    </div>
  );
};

export default Card;
