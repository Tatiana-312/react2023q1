import Input from '../../components/Input/Input';
import React, { useContext, useState } from 'react';
import Select from '../../components/Select/Select';
import Checkbox from '../../components/Checkbox/Checkbox';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch';
import classes from './Form.module.css';
import { CardData } from './cardData.interface';
import DataSaveMessage from '../DataSaveMessage/DataSaveMessage';
import { useForm } from 'react-hook-form';
import { FieldValues, SubmitHandler } from 'react-hook-form/dist/types';
import { CardsContext } from '../../pages/FormPage/FormPage';

const Form: React.FC = () => {
  const [dataSaveMessage, setDataSaveMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ reValidateMode: 'onSubmit' });

  const { setCards } = useContext(CardsContext);

  const countries = [
    'Belarus',
    'Georgia',
    'Germany',
    'Kazakhstan',
    'Kyrgyzstan',
    'Poland',
    'Russia',
    'Ukraine',
    'Uzbekistan',
  ];

  const getCardData = (formData: FieldValues): CardData => {
    return {
      name: formData.name,
      date: formData.date,
      country: formData.country,
      file: URL.createObjectURL(formData.file[0]),
      payment: formData.payment,
    };
  };

  const onSubmit: SubmitHandler<FieldValues> = (formData): void => {
    const cardData: CardData = getCardData(formData);
    setCards((prev) => [...prev, cardData]);
    setDataSaveMessage('Data saved successfully!');
    reset();
  };

  const onChange = (): void => {
    setDataSaveMessage('');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="name"
        testId="input-name"
        type="text"
        label="Name"
        register={register}
        required={true}
        pattern={/^[A-Za-z]{2,29}$/}
        isErrors={Boolean(errors.name)}
        errorText="Name must start with a capital letter and contain more than 1 latin letter without spaces"
        onChange={onChange}
      />
      <Input
        name="date"
        testId="input-date"
        type="date"
        label="Date of delivery"
        register={register}
        required={true}
        validate={(value: Date) => new Date(value) > new Date()}
        isErrors={Boolean(errors.date)}
        errorText="Cannot be selected earlier than the current date"
        onChange={onChange}
      />
      <Input
        name="file"
        testId="input-file"
        type="file"
        label="Book cover"
        register={register}
        required={true}
        validate={(value: File[]) => /^.*\.(jpg|JPG|png|PNG)$/.test(value[0].name)}
        isErrors={Boolean(errors.file)}
        errorText="Only images allowed"
        onChange={onChange}
      />
      <Select
        name="country"
        testId="select-country"
        id="country"
        label="Choose your country"
        register={register}
        required={true}
        validate={(value) => value !== ''}
        isErrors={Boolean(errors.country)}
        errorText="Please choose your country"
        optionValues={countries}
        onChange={onChange}
      />
      <ToggleSwitch
        testId="switch-payment"
        title="Will you pay in cash or by credit card?"
        firstOption="Cash"
        secondOption="Card"
        name="payment"
        register={register}
        required={true}
        isErrors={Boolean(errors.payment)}
        errorText={'Please select a payment method'}
        onChange={onChange}
      />
      <Checkbox
        testId="checkbox-permission"
        name="permission"
        label="I consent to my personal data"
        register={register}
        required={true}
        isErrors={Boolean(errors.permission)}
        errorText={'Please check this box if you want to proceed'}
        onChange={onChange}
      />
      <input
        data-testid="input-submit"
        className={classes.submit__button}
        type="submit"
        value="submit"
      />
      <DataSaveMessage dataSaveMessage={dataSaveMessage} />
    </form>
  );
};

export default Form;
