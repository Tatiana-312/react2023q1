import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

const testData = {
  id: 1,
  imgUrl: 'https://m.media-amazon.com/images/P/0553277537.01._SCLZZZZZZZ_SX500_.jpg',
  name: 'Dandelion Wine',
  author: 'Ray Bredbury',
  genre: 'Novel',
};

describe('Card component', () => {
  it('Card renders', () => {
    render(<Card key={testData.id} {...testData} />);

    expect(screen.getByTestId('card')).toBeDefined();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Novel')).toBeInTheDocument();
    expect(screen.getByText('Buy')).toBeInTheDocument();
  });
});
