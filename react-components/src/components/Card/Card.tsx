import React from 'react';
import classes from './Card.module.css';
import { Data } from '../../pages/Home/data.interface';
import { useAppDispatch } from '../../hook';
import { openModal } from '../../redux/store/modalSlice';
import { rickAndMortyApi } from '../../redux/rickAndMortyApi';

const Card: React.FC<Data> = ({ id, image, name, species }) => {
  const dispatch = useAppDispatch();
  const open = (id: number) => dispatch(openModal(id));

  const [trigger] = rickAndMortyApi.endpoints.getCharacterById.useLazyQuery();

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
        onClick={async (e) => {
          open(+e.currentTarget.id);
          await trigger(+e.currentTarget.id);
        }}
      >
        More
      </button>
    </div>
  );
};

export default Card;
