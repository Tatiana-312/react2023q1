import Card from '../../components/Card/Card';
import React from 'react';
import classes from './CardList.module.css';
import { Data } from '../../pages/Home/data.interface';
import { useAppSelector } from '../../hook';
import { useGetCharacterByNameQuery } from '../../redux/rickAndMortyApi';

const CardList: React.FC = () => {
  const searchValue = useAppSelector((state) => state.searchValue);
  const { data, isError } = useGetCharacterByNameQuery(searchValue);

  return (
    <div className={classes.container}>
      {data &&
        data.results.map((character: Data) => {
          return <Card key={character.id} {...character} />;
        })}
    </div>
  );
};

export default CardList;
