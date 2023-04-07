import React from 'react';
import './Modal.css';
import { ModalProps } from './modalProps.interface';

const Modal: React.FC<ModalProps> = ({ active, modalData, closeModal }) => {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={closeModal} data-testid='modal-window'>
      <div
        className={active ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}
      >
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
          <span className="modal__span">Created: </span>
          {modalData.created}
        </p>
      </div>
    </div>
  );
};

export default Modal;
