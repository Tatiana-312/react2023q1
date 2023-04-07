import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('React router', () => {
  it('Router test', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const homeLink = screen.getByTestId('home-link');
    const aboutLink = screen.getByTestId('about-link');
    const formLink = screen.getByTestId('form-link');
    await userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
    await userEvent.click(homeLink);
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
    await userEvent.click(formLink);
    expect(screen.getByTestId('form-page')).toBeInTheDocument();
  });

  it('Error page test', () => {
    render(
      <MemoryRouter initialEntries={['/hbjhrbjhvf', '/404']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });
});
