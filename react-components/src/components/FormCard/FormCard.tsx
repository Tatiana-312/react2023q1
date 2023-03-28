import React from 'react';
import { CardData } from '../Form/cardData.interface';
import classes from './FormCard.module.css';

const FormCard: React.FC<CardData> = (props) => {
  return (
    <div data-testid="form-card" className={classes.card}>
      <p>
        <span>Name: </span>
        {props.name}
      </p>
      <p>
        <span>Date: </span>
        {props.date}
      </p>
      <p>
        <span>Country: </span>
        {props.country}
      </p>
      <img className={classes.card__img} src={props.file} alt="book cover" />
      <p>
        <span>Payment method: </span>
        {props.payment}
      </p>
    </div>
  );
};
export default FormCard;
