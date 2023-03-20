import Form from '../../components/Form/Form';
import React from 'react';
import classes from './FormPage.module.css';
import { CardsData } from '../../components/Form/cardsData.interface';
import FormCard from '../../components/FormCard/FormCard';

class FormPage extends React.Component {
  cards: CardsData[];
  constructor(props: Record<string, unknown>) {
    super(props);
    this.cards = [];
  }

  uploadCardsData = (data: CardsData) => {
    this.cards.push(data);
    console.log(this.cards);
  };

  render(): React.ReactNode {
    return (
      <div className={classes.form__container}>
        <Form uploadCard={this.uploadCardsData} />
        <FormCard />
      </div>
    );
  }
}

export default FormPage;
