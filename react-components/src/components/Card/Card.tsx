import React, { useContext } from 'react';
import classes from './Card.module.css';
import { Data } from '../../pages/Home/data.interface';
import { HomePageContext } from '../../pages/Home/HomePageContext';

const Card: React.FC<Data> = ({ id, image, name, species }) => {
  const { openModal } = useContext(HomePageContext);
  return (
    <div className={classes.card} data-testid="card">
      <div className={classes.card__body}>
        <img className={classes.card__image} src={image} alt="card-image" />
        <h2 className={classes.card__title}>{name}</h2>
        <h3 className={classes.card__subtitle}>{species}</h3>
      </div>
      <button
        className={classes.card__button}
        data-testid={`card-button${id}`}
        id={`${id}`}
        onClick={openModal}
      >
        More
      </button>
    </div>
  );
};

export default Card;
