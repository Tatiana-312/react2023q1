import React from 'react';
import './Modal.css';
import { ModalProps } from './modalProps.interface';

const Modal: React.FC<ModalProps> = ({ modalData, closeModal }) => {
  return (
    <div className={'modal'} onClick={closeModal}>
      <div className={'modal__content'} onClick={(e) => e.stopPropagation()}>
        <button className="close__button" onClick={closeModal}>
          &times;
        </button>
        <h2 className="modal__title">{modalData.name}</h2>
        <img className="modal__img" src={modalData.image} alt="Avatar" />
        <p className="modal__text">
          <span className="modal__span">Status: </span>
          {modalData.status}
        </p>
        <p className="modal__text">
          <span className="modal__span">Species: </span>
          {modalData.species}
        </p>
        <p className="modal__text">
          <span className="modal__span">Gender: </span>
          {modalData.gender}
        </p>
        <p className="modal__text">
          <span className="modal__span">Location: </span>
          {modalData.location?.name}
        </p>
        <p className="modal__text">
          <span className="modal__span">Origin: </span>
          {modalData.origin?.name}
        </p>
        <p className="modal__text">
          <span className="modal__span">Type: </span>
          {modalData.type ? modalData.type : 'unknown'}
        </p>
        <p className="modal__text">
          <span className="modal__span">Created: </span>
          {new Date(modalData.created!).toLocaleDateString('en-GB')}
        </p>
        <p className="modal__text">
          <span className="modal__span">Url: </span>
          {modalData.url}
        </p>
      </div>
    </div>
  );
};

export default Modal;
