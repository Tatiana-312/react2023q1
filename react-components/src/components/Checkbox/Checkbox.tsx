import React from 'react';
import ValidatorMessage from '../ValidatorErrorMessage/ValidatorMessage';
import classes from './Checkbox.module.css';
import { CheckboxProps } from './checkboxProps.interface';

class Checkbox extends React.Component<CheckboxProps> {
  constructor(props: CheckboxProps) {
    super(props);
  }
  render() {
    return (
      <div className={classes.checkbox__container}>
        <input
          className={classes.checkbox__data}
          type="checkbox"
          id={this.props.name}
          name={this.props.name}
          ref={this.props.refer}
        />
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <ValidatorMessage errorText={this.props.errorText} />
      </div>
    );
  }
}

export default Checkbox;
