import Form from '../../components/Form/Form';
import React, { useState } from 'react';
import classes from './FormPage.module.css';
import { CardData } from '../../components/Form/cardData.interface';
import FormCardList from '../../components/FormCardList/FormCardList';

const FormPage: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);

  const saveCardsToState = (data: CardData) => {
    setCards([...cards, data]);
  };

  return (
    <div data-testid="form-page" className={classes.form__container}>
      <Form saveCard={saveCardsToState} />
      <FormCardList cards={cards} />
    </div>
  );
};

export default FormPage;
