import Card from '../../components/Card/Card';
import { CardProps } from '../../components/Card/cardProps.interface';
import React from 'react';
import booksData from './booksData.json';
import classes from './CardList.module.css';

const CardList: React.FC = () => {
  return (
    <div className={classes.container}>
      {booksData.map((data: CardProps) => {
        return <Card key={data.id} {...data} />;
      })}
    </div>
  );
};

export default CardList;
