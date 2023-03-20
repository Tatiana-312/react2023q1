import Form from '../../components/Form/Form';
import React from 'react';
import classes from './FormPage.module.css';
import { CardsData } from '../../components/Form/cardsData.interface';
import FormCardList from '../../components/FormCardList/FormCardList';
import { FormPageState } from './formPageState.interface';

class FormPage extends React.Component<Record<string, unknown>, FormPageState> {
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  uploadCardsData = (data: CardsData) => {
    this.setState((prevState) => ({
      cards: [...prevState.cards, data],
    }));
  };

  render(): React.ReactNode {
    return (
      <div className={classes.form__container}>
        <Form uploadCard={this.uploadCardsData} />
        <FormCardList {...this.state} />
      </div>
    );
  }
}

export default FormPage;
