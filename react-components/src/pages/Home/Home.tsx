import SearchBar from '../../components/SearchBar/SearchBar';
import React, { useState } from 'react';
import Title from '../../components/Title/Title';
import CardList from '../../components/CardList/CardList';
import { Data } from './data.interface';
import { HomePageContext } from './HomePageContext';
import FetchDataError from '../../components/FetchDataError/FetchDataError';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';
import { getCharacterById } from '../../services/character.service';

const Home: React.FC = () => {
  const [apiCharacters, setApiCharacters] = useState<Data[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [modalData, setModalData] = useState<Data>({});
  const [modalActive, setModalActive] = useState<boolean>(false);

  const openModal = async (e: React.MouseEvent<HTMLElement>) => {
    const character = await getCharacterById(+e.currentTarget.id);
    setModalData(character);
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  return (
    <HomePageContext.Provider
      value={{ apiCharacters, setApiCharacters, setIsError, setIsLoaded, openModal }}
    >
      <div data-testid="home-page">
        <Title {...{ title: 'Rick and Morty' }} />
        <SearchBar />
        {!isLoaded ? <Loader /> : <CardList />}
        {isError && <FetchDataError />}
        <Modal modalData={modalData} active={modalActive} closeModal={closeModal} />
      </div>
    </HomePageContext.Provider>
  );
};

export default Home;
