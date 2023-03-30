import React from 'react';
import { ValidatorMessageProps } from './validatorMessageProps.interface';
import classes from './ValidatorMessage.module.css';

const ValidatorMessage: React.FC<ValidatorMessageProps> = ({ errorText }) => {
  return <span className={classes.validation__error}>{errorText}</span>;
};

export default ValidatorMessage;
