import React from 'react';
import { render, screen } from '@testing-library/react';
import CardList from './CardList';

describe('CardList component', () => {
  it('Cards render', () => {
    render(<CardList />);

    expect(screen.getAllByTestId('card')).toHaveLength(8);
    expect(screen.getAllByRole('img')).toHaveLength(8);
  });
});
