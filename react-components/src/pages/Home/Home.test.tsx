import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from './Home';
import { server } from './mocks/server';
import { renderWithProviders } from '../../testUtils';

beforeAll(() =>
  server.listen({
    onUnhandledRequest: 'error',
  })
);

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('HomePage', () => {
  describe('Fetch', () => {
    it('should create card using all data from Mock API', async () => {
      renderWithProviders(<Home />);
      expect(await screen.findByText('Rick Sanchez')).toBeInTheDocument();
      expect(await screen.findByText('Morty Smith')).toBeInTheDocument();
      expect(screen.getAllByTestId('card')).toHaveLength(2);
    });

    it('should open modal window with data from Mock API by clicking on card button', async () => {
      renderWithProviders(<Home />);
      const cardButton = await waitFor(() => screen.getByTestId('card-button1'));
      await userEvent.click(cardButton);
      expect(await screen.findByText('Alive')).toBeInTheDocument();
      expect(await screen.findByText('Male')).toBeInTheDocument();
      expect(await screen.findByText('Citadel of Ricks')).toBeInTheDocument();
    });

    it('should search works', async () => {
      renderWithProviders(<Home />);
      const searchBar = screen.getByRole('textbox');
      const searchButton = screen.getByRole('button', { name: 'Search' });
      await userEvent.type(searchBar, 'morty');
      await userEvent.click(searchButton);
      expect(await screen.findByText('Morty Smith')).toBeInTheDocument();
      expect(await screen.findByText('Human')).toBeInTheDocument();
    });

    it('should catch error, when incorrect request and show it on the page', async () => {
      renderWithProviders(<Home />);
      const searchBar = screen.getByRole('textbox');
      const searchButton = screen.getByRole('button', { name: 'Search' });
      await userEvent.type(searchBar, 'q4q4');
      await userEvent.click(searchButton);
      expect(screen.getByAltText('Oops!'));
      expect(screen.getByText('Character cannot be found!')).toBeInTheDocument();
    });
  });

  it('should close modal window by clicking on close button', async () => {
    renderWithProviders(<Home />);
    const cardButton = await waitFor(() => screen.getByTestId('card-button1'));
    await userEvent.click(cardButton);
    const modalData = screen.getByText('Citadel of Ricks');
    const closeButton = screen.getByRole('button', { name: '×' });
    await userEvent.click(closeButton);
    expect(modalData).not.toBeInTheDocument();
  });
});
