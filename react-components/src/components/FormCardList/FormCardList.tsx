import React, { useContext } from 'react';
import { CardsContext } from '../../pages/FormPage/FormPage';
import { CardData } from '../Form/cardData.interface';
import FormCard from '../FormCard/FormCard';
import classes from './FormCardList.module.css';

const FormCardList: React.FC = () => {
  const { cards } = useContext(CardsContext);
  return (
    <div className={classes.cardList__container}>
      {cards.map((item: CardData, index: number) => {
        return <FormCard key={index} {...item} />;
      })}
    </div>
  );
};

export default FormCardList;
