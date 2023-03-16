import React from 'react';
import booksData from './booksData.json';
import classes from './CardList.module.css';

class CardList extends React.Component {
  render(): React.ReactNode {
    return <div className={classes.container}>
        Cards
    </div>;
  }
}

export default CardList;
