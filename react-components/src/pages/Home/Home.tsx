import SearchBar from '../../components/SearchBar/SearchBar';
import React, { useState } from 'react';
import Title from '../../components/Title/Title';
import CardList from '../../components/CardList/CardList';
import { Data } from '../../components/SearchBar/data.interface';
import { ApiDataContextType } from './apiDataContext.interface';

export const ApiDataContext = React.createContext<ApiDataContextType>({
  apiCharacters: [],
  setApiCharacters: () => {},
});

const Home: React.FC = () => {
  const [apiCharacters, setApiCharacters] = useState<Data[]>([]);

  return (
    <ApiDataContext.Provider value={{ apiCharacters, setApiCharacters }}>
      <div data-testid="home-page">
        <Title {...{ title: 'Rick and Morty' }} />
        <SearchBar />
        <CardList />
      </div>
    </ApiDataContext.Provider>
  );
};

export default Home;
