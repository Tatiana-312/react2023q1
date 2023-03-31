import Card from '../../components/Card/Card';
import React, { useContext } from 'react';
import classes from './CardList.module.css';
import { ApiDataContext } from '../../pages/Home/Home';
import { Data } from '../../pages/Home/data.interface';

const CardList: React.FC = () => {
  const { apiCharacters } = useContext(ApiDataContext);
  return (
    <div className={classes.container}>
      {apiCharacters.map((character: Data) => {
        return <Card key={character.id} {...character} />;
      })}
    </div>
  );
};

export default CardList;
