import React from 'react';
import { SelectProps } from './selectProps.interface';
import classes from './Select.module.css';
import ValidatorMessage from '../ValidatorErrorMessage/ValidatorMessage';

const Select: React.FC<SelectProps> = ({
  testId,
  id,
  label,
  name,
  optionValues,
  register,
  required,
  isErrors,
  errorText,
  onChange,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select
        data-testid={testId}
        className={classes.select__country}
        id={id}
        {...register(name, { required: required })}
        onChange={onChange}
      >
        <option value="" hidden>
          Choose you country
        </option>
        {optionValues.map((value, index) => {
          return <option key={index}>{value}</option>;
        })}
      </select>
      {isErrors ? <ValidatorMessage errorText={errorText} /> : <ValidatorMessage errorText="" />}
    </>
  );
};

export default Select;
