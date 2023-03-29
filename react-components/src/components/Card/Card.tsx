import React from 'react';
import { CardProps } from './cardProps.interface';
import classes from './Card.module.css';

const Card: React.FC<CardProps> = ({ imgUrl, name, author, genre }) => {
  return (
    <div className={classes.card} data-testid="card">
      <div className={classes.card__body}>
        <img className={classes.card__image} src={imgUrl} alt="card-image" />
        <h2 className={classes.card__title}>{name}</h2>
        <h3 className={classes.card__subtitle}>{author}</h3>
        <p className={classes.card__description}>{genre}</p>
      </div>
      <button className={classes.card__button}>Buy</button>
    </div>
  );
};

export default Card;
