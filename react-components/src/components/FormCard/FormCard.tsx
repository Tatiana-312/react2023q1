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
        <h3>name: {this.props.name}</h3>
        <h3>surname: {this.props.surname}</h3>
        <p>date: {this.props.date}</p>
        <p>country: {this.props.country}</p>
        <img src={this.props.file} alt="book cover" />
        <p>payment method: {this.props.payment}</p>
      </div>
    );
  }
}
export default FormCard;
