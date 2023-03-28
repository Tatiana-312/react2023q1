import React from 'react';
import { CardData } from '../Form/cardData.interface';
import FormCard from '../FormCard/FormCard';
import classes from './FormCardList.module.css';
import { FormCardListProps } from './formCardListProps.interface';

const FormCardList: React.FC<FormCardListProps> = ({ cards }) => {
  return (
    <div className={classes.cardList__container}>
      {cards.map((item: CardData, index: number) => {
        return <FormCard key={index} {...item} />;
      })}
    </div>
  );
};

export default FormCardList;
