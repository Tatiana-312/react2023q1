import React from 'react';
import { InputFileProps } from './inputFileProps.interface';
import classes from './InputFile.module.css';
import ValidatorMessage from '../ValidatorErrorMessage/ValidatorMessage';

const InputFile: React.FC<InputFileProps> = ({
  label,
  testId,
  type,
  name,
  errorText,
  register,
  required,
  validate,
  isErrors,
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
          validate: validate,
        })}
      />
      {isErrors ? <ValidatorMessage errorText={errorText} /> : <ValidatorMessage errorText="" />}
    </label>
  );
};

export default InputFile;
