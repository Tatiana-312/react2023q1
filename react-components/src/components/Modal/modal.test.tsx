import { vi } from 'vitest';
import Modal from './Modal';
import { render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';

const modalData = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  location: {
    name: 'Citadel of Ricks',
    url: 'https://rickandmortyapi.com/api/location/3',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  url: 'https://rickandmortyapi.com/api/character/1',
  created: '2017-11-04T18:48:46.250Z',
};
const modalActive = true;
const handleClose = vi.fn();

describe('Modal window', () => {
  it('should call modalClose function by clicking on close button', async () => {
    render(<Modal modalData={modalData} active={modalActive} closeModal={handleClose} />);
    const closeButton = screen.getByRole('button', { name: '×' });
    await userEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
