import React from 'react';
import ValidatorMessage from '../ValidatorErrorMessage/ValidatorMessage';
import classes from './Checkbox.module.css';
import { CheckboxProps } from './checkboxProps.interface';

const Checkbox: React.FC<CheckboxProps> = ({
  testId,
  name,
  label,
  register,
  required,
  isErrors,
  errorText,
}) => {
  return (
    <>
      <div className={classes.checkbox__container}>
        <input
          data-testid={testId}
          className={classes.checkbox__data}
          type="checkbox"
          id={name}
          {...register(name, { required: required })}
        />
        <label htmlFor={name}>{label}</label>
      </div>
      {isErrors ? <ValidatorMessage errorText={errorText} /> : <ValidatorMessage errorText="" />}
    </>
  );
};

export default Checkbox;
