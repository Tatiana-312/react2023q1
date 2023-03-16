import Card from '../../components/Card/Card';
import { CardProps } from '../../components/Card/cardProps.interface';
import React from 'react';
import booksData from './booksData.json';
import classes from './CardList.module.css';

class CardList extends React.Component {
  render(): React.ReactNode {
    return (
      <div className={classes.container}>
        {booksData.map((data: CardProps) => {
          return <Card key={data.id} {...data} />;
        })}
      </div>
    );
  }
}

export default CardList;
