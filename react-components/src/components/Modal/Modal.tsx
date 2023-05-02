import React from 'react';
import './Modal.css';
import { useGetCharacterByIdQuery } from '../../redux/rickAndMortyApi';
import Loader from '../Loader/Loader';
import { useAppDispatch, useAppSelector } from '../../hook';
import { closeModal } from '../../redux/store/modalSlice';

const Modal: React.FC = () => {
  const cardId = useAppSelector((state) => state.modal.id);
  const { data, isLoading, isFetching } = useGetCharacterByIdQuery(cardId);

  const dispatch = useAppDispatch();
  const close = () => dispatch(closeModal());

  return (
    <div className={'modal'} onClick={close}>
      {(isLoading || isFetching) && <Loader />}
      {data && (
        <div
          data-testid="modal-content"
          className={'modal__content'}
          onClick={(e) => e.stopPropagation()}
        >
          <button data-testid="close-button" className="close__button" onClick={close}>
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
