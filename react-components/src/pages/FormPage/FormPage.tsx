import Form from '../../components/Form/Form';
import React, { useState } from 'react';
import classes from './FormPage.module.css';
import { CardData } from '../../components/Form/cardData.interface';
import FormCardList from '../../components/FormCardList/FormCardList';
import { CardsContextType } from './CardsContextType.interface';

export const CardsContext = React.createContext<CardsContextType>({
  cards: [],
  setCards: () => {},
});

const FormPage: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);

  return (
    <CardsContext.Provider value={{ cards, setCards }}>
      <div data-testid="form-page" className={classes.form__container}>
        <Form />
        <FormCardList />
      </div>
    </CardsContext.Provider>
  );
};

export default FormPage;
