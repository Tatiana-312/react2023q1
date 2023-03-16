import React from 'react';
import { fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';
import { vi } from 'vitest';

const onChange = vi.fn();
const value = '';

describe('Search component', () => {
    it('renders Search component', () => {
        render(
            <SearchBar value={value} onChange={onChange} />
        )

        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders without placeholder', () => {
        render(
            <SearchBar value={value} onChange={onChange} />
        )

        expect(screen.getByPlaceholderText('Type text here')).toBeInTheDocument();
    });

    it('prints text in textbox', () => {
        render(
            <SearchBar value='' onChange={onChange} />
        )
        const input = screen.getByPlaceholderText('Type text here');
        fireEvent.change(input, {target: { value: 'React'}});
        expect(input).toHaveValue('React');
    });
})