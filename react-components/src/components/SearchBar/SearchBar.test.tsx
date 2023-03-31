import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('Search component', () => {
  it('renders Search component', () => {
    render(<SearchBar />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders with placeholder', () => {
    render(<SearchBar />);

    expect(screen.getByPlaceholderText('Type text here')).toBeInTheDocument();
  });

  it('prints text in textbox', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Type text here');
    fireEvent.change(input, { target: { value: 'React' } });
    expect(input).toHaveValue('React');
  });
});
