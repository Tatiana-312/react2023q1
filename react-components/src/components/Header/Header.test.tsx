import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

describe('Header component', () => {
  it('Header renders', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByTestId('home-link')).toBeInTheDocument();
    expect(screen.getByTestId('about-link')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('Should shows current page correctly', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const homeLink = screen.getByTestId('home-link');
    const aboutLink = screen.getByTestId('about-link');
    const formLink = screen.getByTestId('form-link');
    fireEvent.click(aboutLink);
    expect(screen.getByRole('heading', { name: 'about page' })).toBeInTheDocument();
    fireEvent.click(homeLink);
    expect(screen.getByRole('heading', { name: 'home page' })).toBeInTheDocument();
    fireEvent.click(formLink);
    expect(screen.getByRole('heading', { name: 'form page' })).toBeInTheDocument();
  });
});
