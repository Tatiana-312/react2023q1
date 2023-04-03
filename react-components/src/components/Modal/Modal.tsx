import React from 'react';
import './Modal.css';
import { ModalProps } from './modalProps.interface';

const Modal: React.FC<ModalProps> = ({ active, modalData, closeModal }) => {
  console.log(modalData);
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={closeModal}>
      <div
        className={active ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}
      >
        <p>{modalData.name}</p>
        <p>{modalData.status}</p>
        <p>{modalData.species}</p>
        <p>{modalData.gender}</p>
        <img src={modalData.image} alt="Avatar" />
        <p>{modalData.url}</p>
        <p>{modalData.created}</p>
      </div>
    </div>
  );
};

export default Modal;
