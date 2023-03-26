import React from 'react';
import { CardData } from '../Form/cardData.interface';
import FormCard from '../FormCard/FormCard';
import classes from './FormCardList.module.css';
import { FormCardListProps } from './formCardListProps.interface';

class FormCardList extends React.Component<FormCardListProps> {
  constructor(props: FormCardListProps) {
    super(props);
  }

  render() {
    return (
      <div className={classes.cardList__container}>
        {this.props.cards.map((item: CardData, index: number) => {
          return <FormCard key={index} {...item} />;
        })}
      </div>
    );
  }
}

export default FormCardList;
