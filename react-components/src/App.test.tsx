import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('React router', () => {
  it('Router test', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const homeLink = screen.getByTestId('home-link');
    const aboutLink = screen.getByTestId('about-link');
    const formLink = screen.getByTestId('form-link');
    fireEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
    fireEvent.click(homeLink);
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
    fireEvent.click(formLink);
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
