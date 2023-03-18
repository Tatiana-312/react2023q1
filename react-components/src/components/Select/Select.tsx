import React from 'react';
import { SelectProps } from './selectProps.interface';
import classes from './Select.module.css';

class Select extends React.Component<SelectProps> {
  constructor(props: SelectProps) {
    super(props);
  }
  render() {
    return (
      <>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <select
          className={classes.select__country}
          name={this.props.name}
          id={this.props.id}
          ref={this.props.refer}
        >
          {this.props.optionValues.map((value, index) => {
            return <option key={index}>{value}</option>;
          })}
        </select>
      </>
    );
  }
}
export default Select;
