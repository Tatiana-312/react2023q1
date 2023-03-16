import React from 'react';
import { CardProps } from './cardProps.interface';
import classes from './Card.module.css';

class Card extends React.Component<CardProps> {
  constructor(props: CardProps) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <div className={classes.card}>
        <div className={classes.card__body}>
          <img className={classes.card__image} src={this.props.imgUrl} alt="card-image" />
          <h2 className={classes.card__title}>{this.props.name}</h2>
          <h3 className={classes.card__subtitle}>{this.props.author}</h3>
          <p className={classes.card__description}>{this.props.genre}</p>
        </div>
        <button className={classes.card__button}>Buy</button>
      </div>
    );
  }
}

export default Card;
