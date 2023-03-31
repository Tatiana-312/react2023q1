import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

const localStorageMock = (function () {
  type Store = {
    [key: string]: string;
  };

  let store: Store = {};

  return {
    getItem(key: string) {
      return store[key];
    },

    setItem(key: string, value: string) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key: string) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();

describe('Local Storage', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
    window.localStorage.clear();
  });

  it('sets input with value from localStorage', () => {
    const mockKey = 'value';
    const mockValue = 'test data';

    localStorage.setItem(mockKey, mockValue);

    render(<SearchBar />);

    expect(screen.getByRole('textbox')).toHaveValue(mockValue);
  });

  it('sets input with "" if no data in localStorage', () => {
    render(<SearchBar />);

    expect(screen.getByRole('textbox')).toHaveValue('');
  });
});
