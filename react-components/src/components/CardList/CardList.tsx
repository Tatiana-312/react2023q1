import Card from '../../components/Card/Card';
import React from 'react';
import classes from './CardList.module.css';
import { Data } from '../../pages/Home/data.interface';
import { useAppSelector } from '../../hook';

const CardList: React.FC = () => {
  const charactersData: Data[] = useAppSelector(state => state.apiData.characters);
  return (
    <div className={classes.container}>
      {charactersData.map((character: Data) => {
        return <Card key={character.id} {...character} />;
      })}
    </div>
  );
};

export default CardList;
