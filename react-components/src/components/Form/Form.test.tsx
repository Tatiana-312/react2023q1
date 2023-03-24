import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from './Form';
import userEvent from '@testing-library/user-event';

describe('Form component', () => {
  it('render form components', () => {
    render(
      <Form
        saveCard={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );

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
      render(
        <Form
          saveCard={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      );
      const input = screen.getByTestId('input-name');
      await userEvent.type(input, 'React');
      expect(input).toHaveValue('React');
    });

    it('input date component', async () => {
      render(
        <Form
          saveCard={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      );
      const input = screen.getByTestId('input-date');
      await userEvent.type(input, '2022-11-05');
      expect(input).toHaveValue('2022-11-05');
    });

    it('upload files in input file component', async () => {
      render(
        <Form
          saveCard={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      );
      const mockFile = new File(['someImage'], 'someImage.png', { type: 'image/png' });
      const inputFile = screen.getByTestId('input-file') as HTMLInputElement;
      await userEvent.upload(inputFile, mockFile);
      expect(inputFile.files![0]).toStrictEqual(mockFile);
      expect(inputFile.files).toHaveLength(1);
    });
  });

  describe('check select country component', () => {
    it('should display the correct number of options', () => {
      render(
        <Form
          saveCard={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      );
      expect(screen.getAllByRole('option').length).toBe(9);
    });

    it('should allow user to change country', async () => {
      render(
        <Form
          saveCard={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      );
      const select = screen.getByTestId('select-country');
      const option = screen.getByRole('option', { name: 'Kyrgyzstan' }) as HTMLOptionElement;
      await userEvent.selectOptions(select, option);
      expect(option.selected).toBe(true);
    });
  });

  it('is switched toggleSwitch after click', async () => {
    render(
      <Form
        saveCard={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    const cashRadio = screen.getByTestId('payment-first');
    const cardRadio = screen.getByTestId('payment-second');

    await userEvent.click(cashRadio);
    expect(cashRadio).toBeChecked();
    expect(cardRadio).not.toBeChecked();

    await userEvent.click(cardRadio);
    expect(cashRadio).not.toBeChecked();
    expect(cardRadio).toBeChecked();
  });
});
