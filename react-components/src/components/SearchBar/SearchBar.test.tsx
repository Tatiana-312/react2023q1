import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';
import { renderWithProviders } from '../../testUtils';

describe('Search component', () => {
  it('renders Search component', () => {
    renderWithProviders(<SearchBar />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders with placeholder', () => {
    renderWithProviders(<SearchBar />);

    expect(screen.getByPlaceholderText('Type name here')).toBeInTheDocument();
  });

  it('prints text in textbox', () => {
    renderWithProviders(<SearchBar />);
    const input = screen.getByPlaceholderText('Type name here');
    fireEvent.change(input, { target: { value: 'React' } });
    expect(input).toHaveValue('React');
  });
});
