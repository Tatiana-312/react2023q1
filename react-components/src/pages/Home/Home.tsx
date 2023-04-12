import SearchBar from '../../components/SearchBar/SearchBar';
import React, { useState } from 'react';
import Title from '../../components/Title/Title';
import CardList from '../../components/CardList/CardList';
import FetchDataError from '../../components/FetchDataError/FetchDataError';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';
import { useAppSelector } from '../../hook';
import { useGetCharactersQuery } from '../../redux/rickAndMortyApi';
import { HomePageContext } from './HomePageContext';

const Home: React.FC = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [cardId, setCardId] = useState<number>(0);

  const searchValue = useAppSelector((state) => state.searchValue);

  const { isLoading, isFetching, isError } = useGetCharactersQuery(searchValue);

  const openModal = async (e: React.MouseEvent<HTMLElement>) => {
    console.log(+e.currentTarget.id);
    setCardId(+e.currentTarget.id);
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  const cardList = isFetching || isError ? null : <CardList />;
  return (
    <HomePageContext.Provider value={{ openModal, cardId }}>
      <div data-testid="home-page">
        <Title {...{ title: 'Rick and Morty' }} />
        <SearchBar />
        {(isLoading || isFetching) && <Loader />}
        {isError && <FetchDataError />}
        {cardList}
        {modalActive ? <Modal closeModal={closeModal} /> : null}
      </div>
    </HomePageContext.Provider>
  );
};

export default Home;
