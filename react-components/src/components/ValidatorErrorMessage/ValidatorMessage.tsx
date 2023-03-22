import React from 'react';
import { ValidatorMessageProps } from './validatorMessageProps.interface';
import classes from './ValidatorMessage.module.css';

class ValidatorMessage extends React.Component<ValidatorMessageProps> {
  constructor(props: ValidatorMessageProps) {
    super(props);
  }
  render() {
    return <span className={classes.validation__error}>{this.props.errorText}</span>;
  }
}

export default ValidatorMessage;
