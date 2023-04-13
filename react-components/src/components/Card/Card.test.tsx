import React from 'react';
import { screen } from '@testing-library/react';
import Card from './Card';
import { renderWithProviders } from '../../testUtils';

describe('Card component', () => {
  it('Card renders', () => {
    renderWithProviders(<Card />);

    expect(screen.getByTestId('card')).toBeDefined();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('More')).toBeInTheDocument();
  });
});
