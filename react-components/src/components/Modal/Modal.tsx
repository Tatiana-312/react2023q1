import React, { useContext } from 'react';
import './Modal.css';
import { ModalProps } from './modalProps.interface';
import { useGetCharacterByIdQuery } from '../../redux/rickAndMortyApi';
import { HomePageContext } from '../../pages/Home/HomePageContext';
import Loader from '../Loader/Loader';

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  const { cardId } = useContext(HomePageContext);
  const { data, isLoading, isFetching } = useGetCharacterByIdQuery(cardId);

  return (
    <div className={'modal'} onClick={closeModal}>
      {(isLoading || isFetching) && <Loader />}
      {data && (
        <div className={'modal__content'} onClick={(e) => e.stopPropagation()}>
          <button className="close__button" onClick={closeModal}>
            &times;
          </button>
          <h2 className="modal__title">{data.name}</h2>
          <img className="modal__img" src={data.image} alt="Avatar" />
          <p className="modal__text">
            <span className="modal__span">Status: </span>
            {data.status}
          </p>
          <p className="modal__text">
            <span className="modal__span">Species: </span>
            {data.species}
          </p>
          <p className="modal__text">
            <span className="modal__span">Gender: </span>
            {data.gender}
          </p>
          <p className="modal__text">
            <span className="modal__span">Location: </span>
            {data.location?.name}
          </p>
          <p className="modal__text">
            <span className="modal__span">Origin: </span>
            {data.origin?.name}
          </p>
          <p className="modal__text">
            <span className="modal__span">Type: </span>
            {data.type ? data.type : 'unknown'}
          </p>
          <p className="modal__text">
            <span className="modal__span">Created: </span>
            {new Date(data.created!).toLocaleDateString('en-GB')}
          </p>
          <p className="modal__text">
            <span className="modal__span">Url: </span>
            {data.url}
          </p>
        </div>
      )}
    </div>
  );
};

export default Modal;
