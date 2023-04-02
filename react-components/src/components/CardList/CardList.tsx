import Card from '../../components/Card/Card';
import React, { useContext } from 'react';
import classes from './CardList.module.css';
import { Data } from '../../pages/Home/data.interface';
import { HomePageContext } from '../../pages/Home/HomePageContext';

const CardList: React.FC = () => {
  const { apiCharacters } = useContext(HomePageContext);
  return (
    <div className={classes.container}>
      {apiCharacters.map((character: Data) => {
        return <Card key={character.id} {...character} />;
      })}
    </div>
  );
};

export default CardList;
