import React from 'react';
import { CardsData } from '../Form/cardsData.interface';
import classes from './FormCard.module.css';

class FormCard extends React.Component<CardsData> {
  constructor(props: CardsData) {
    super(props);
  }
  render() {
    return (
      <div className={classes.card}>
        <p>
          <span>Name: </span>
          {this.props.name}
        </p>
        <p>
          <span>Surname: </span>
          {this.props.surname}
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
