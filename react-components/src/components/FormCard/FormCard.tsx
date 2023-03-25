import React from 'react';
import { CardData } from '../Form/cardData.interface';
import classes from './FormCard.module.css';

class FormCard extends React.Component<CardData> {
  constructor(props: CardData) {
    super(props);
  }
  render() {
    return (
      <div data-testid='form-card' className={classes.card}>
        <p>
          <span>Name: </span>
          {this.props.name}
        </p>
        <p>
          <span>Date: </span>
          {this.props.date}
        </p>
        <p>
          <span>Country: </span>
          {this.props.country}
        </p>
        <img className={classes.card__img} src={this.props.file} alt="book cover" />
        <p>
          <span>Payment method: </span>
          {this.props.payment}
        </p>
      </div>
    );
  }
}
export default FormCard;
