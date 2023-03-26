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
      <>
        <div className={classes.checkbox__container}>
          <input
            data-testid={this.props.testId}
            className={classes.checkbox__data}
            type="checkbox"
            id={this.props.name}
            name={this.props.name}
            ref={this.props.refer}
          />
          <label htmlFor={this.props.name}>{this.props.label}</label>
        </div>
        <ValidatorMessage errorText={this.props.errorText} />
      </>
    );
  }
}

export default Checkbox;
