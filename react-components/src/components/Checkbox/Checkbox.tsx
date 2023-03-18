import React from 'react';
import classes from './Checkbox.module.css';
import { CheckboxProps } from './checkboxProps.interface';

class Checkbox extends React.Component<CheckboxProps> {
  constructor(props: CheckboxProps) {
    super(props);
  }
  render() {
    return (
      <>
        <input
          className={classes.checkbox__data}
          type="checkbox"
          id={this.props.name}
          name={this.props.name}
        />
        <label htmlFor={this.props.name}>{this.props.label}</label>
      </>
    );
  }
}

export default Checkbox;
