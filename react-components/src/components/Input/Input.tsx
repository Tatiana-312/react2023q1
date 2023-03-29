import React from 'react';
import { InputProps } from './inputProps.interface';
import classes from './Input.module.css';
import ValidatorMessage from '../ValidatorErrorMessage/ValidatorMessage';

const Input: React.FC<InputProps> = ({
  label,
  testId,
  type,
  name,
  errorText,
  register,
  required,
  pattern,
  validate,
  isErrors,
  onChange
}) => {
  return (
    <label className={classes.label}>
      {label}
      <input
        data-testid={testId}
        className={classes.input}
        type={type}
        {...register(name, {
          required: required,
          pattern: pattern,
          validate: validate,
        })}
        onChange={onChange}
      />
      {isErrors ? <ValidatorMessage errorText={errorText} /> : <ValidatorMessage errorText="" />}
    </label>
  );
};

export default Input;
