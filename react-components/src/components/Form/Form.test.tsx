import React from 'react';
import { screen } from '@testing-library/react';
import Form from './Form';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { renderWithProviders } from '../../testUtils';

describe('Form component', () => {
  it('render form components', () => {
    renderWithProviders(<Form />);

    expect(screen.getByTestId('input-name')).toBeInTheDocument();
    expect(screen.getByTestId('input-date')).toBeInTheDocument();
    expect(screen.getByTestId('select-country')).toBeInTheDocument();
    expect(screen.getByTestId('input-file')).toBeInTheDocument();
    expect(screen.getByTestId('switch-payment')).toBeInTheDocument();
    expect(screen.getByTestId('checkbox-permission')).toBeInTheDocument();
    expect(screen.getByTestId('input-submit')).toBeInTheDocument();
  });

  describe('add data in input fields', () => {
    it('print text in input name component', async () => {
      renderWithProviders(<Form />);
      const input = screen.getByTestId('input-name');
      await userEvent.type(input, 'React');
      expect(input).toHaveValue('React');
    });

    it('input date component', async () => {
      renderWithProviders(<Form />);
      const input = screen.getByTestId('input-date');
      await userEvent.type(input, '2022-11-05');
      expect(input).toHaveValue('2022-11-05');
    });

    it('upload files in input file component', async () => {
      renderWithProviders(<Form />);
      const mockFile = new File(['someImage'], 'someImage.png', { type: 'image/png' });
      const inputFile = screen.getByTestId('input-file') as HTMLInputElement;
      await userEvent.upload(inputFile, mockFile);
      expect(inputFile.files![0]).toStrictEqual(mockFile);
      expect(inputFile.files).toHaveLength(1);
    });
  });

  describe('check select country component', () => {
    it('should display the correct number of options', () => {
      renderWithProviders(<Form />);
      expect(screen.getAllByRole('option').length).toBe(9);
    });

    it('should allow user to change country', async () => {
      renderWithProviders(<Form />);
      const select = screen.getByTestId('select-country');
      const option = screen.getByRole('option', { name: 'Kyrgyzstan' }) as HTMLOptionElement;
      await userEvent.selectOptions(select, option);
      expect(option.selected).toBe(true);
    });
  });

  it('is switched toggleSwitch after click', async () => {
    renderWithProviders(<Form />);
    const cashRadio = screen.getByTestId('payment-first');
    const cardRadio = screen.getByTestId('payment-second');

    await userEvent.click(cashRadio);
    expect(cashRadio).toBeChecked();
    expect(cardRadio).not.toBeChecked();

    await userEvent.click(cardRadio);
    expect(cashRadio).not.toBeChecked();
    expect(cardRadio).toBeChecked();
  });

  describe('check validation', () => {
    const messages = {
      nameError:
        'Name must start with a capital letter and contain more than 1 latin letter without spaces',
      dateError: 'Cannot be selected earlier than the current date',
      fileError: 'Only images allowed',
      checkboxError: 'Please check this box if you want to proceed',
      selectError: 'Please choose your country',
    };

    it('should show name validate error', async () => {
      renderWithProviders(<Form />);
      const inputName = screen.getByTestId('input-name');
      await userEvent.type(inputName, 'react2');
      const submit = screen.getByTestId('input-submit');
      await userEvent.click(submit);
      expect(screen.getByText(messages.nameError)).toBeInTheDocument();
    });

    it('should show date validate error', async () => {
      renderWithProviders(<Form />);
      const inputDate = screen.getByTestId('input-date');
      const invalidTestDate = '2023-03-20';
      await userEvent.type(inputDate, invalidTestDate);
      const submit = screen.getByTestId('input-submit');
      await userEvent.click(submit);
      expect(screen.getByText(messages.dateError)).toBeInTheDocument();
    });

    it('should show file validate error', async () => {
      renderWithProviders(<Form />);
      const mockFile = new File(['someDoc'], 'someDoc.txt', { type: 'txt' });
      const inputFile = screen.getByTestId('input-file') as HTMLInputElement;
      await userEvent.upload(inputFile, mockFile);
      const submit = screen.getByTestId('input-submit');
      await userEvent.click(submit);
      expect(screen.getByText(messages.fileError)).toBeInTheDocument();
    });

    it('should show country validate error', async () => {
      renderWithProviders(<Form />);
      const submit = screen.getByTestId('input-submit');
      await userEvent.click(submit);
      expect(screen.getByText(messages.selectError)).toBeInTheDocument();
    });

    it('should show checkbox validate error', async () => {
      renderWithProviders(<Form />);
      const checkbox = screen.getByTestId('checkbox-permission');
      const submit = screen.getByTestId('input-submit');
      await userEvent.click(submit);
      expect(checkbox).not.toBeChecked();
      expect(screen.getByText(messages.checkboxError)).toBeInTheDocument();
    });

    it('should display successful message if valid all inputs', async () => {
      renderWithProviders(<Form />);

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

      expect(screen.getByText('Data saved successfully!')).toBeInTheDocument();
    });
  });
});
