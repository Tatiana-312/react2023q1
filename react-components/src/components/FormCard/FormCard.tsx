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
          <span>name: </span>
          {this.props.name}
        </p>
        <p>
          <span>surname: </span>
          {this.props.surname}
        </p>
        <p>
          <span>date: </span>
          {this.props.date}
        </p>
        <p>
          <span>country: </span>
          {this.props.country}
        </p>
        <img src={this.props.file} alt="book cover" />
        <p>
          <span>payment method: </span>
          {this.props.payment}
        </p>
      </div>
    );
  }
}
export default FormCard;
