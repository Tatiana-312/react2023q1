import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import FormPage from './FormPage';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

describe('FormPage component', () => {
  it('create card after submit with information from inputs', async () => {
    render(<FormPage />);

    const inputName = screen.getByTestId('input-name');
    await userEvent.type(inputName, 'React');

    const inputData = screen.getByTestId('input-date');
    const currentDate = new Date();
    const tomorrow = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
    const correctTestDate = tomorrow.toISOString().split('T')[0];
    await userEvent.type(inputData, correctTestDate);

    global.URL.createObjectURL = vi.fn();
    const mockFile = new File(['someImage'], 'someImage.png', { type: 'image/png' });
    const inputFile = screen.getByTestId('input-file') as HTMLInputElement;
    await userEvent.upload(inputFile, mockFile);

    const select = screen.getByTestId('select-country');
    const option = screen.getByRole('option', { name: 'Kyrgyzstan' }) as HTMLOptionElement;
    await userEvent.selectOptions(select, option);

    const cashRadio = screen.getByTestId('payment-first');
    await userEvent.click(cashRadio);

    const checkbox = screen.getByTestId('checkbox-permission');
    await userEvent.click(checkbox);

    const submit = screen.getByTestId('input-submit');
    await userEvent.click(submit);

    const card = screen.getByTestId('form-card');
    waitFor(() => card);
    expect(card).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText(correctTestDate)).toBeInTheDocument();
  });
});
