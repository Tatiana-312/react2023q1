import React from 'react';
import { SelectProps } from './selectProps.interface';
import classes from './Select.module.css';
import ValidatorMessage from '../ValidatorErrorMessage/ValidatorMessage';

class Select extends React.Component<SelectProps> {
  constructor(props: SelectProps) {
    super(props);
  }
  render() {
    return (
      <>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <select
          data-testid={this.props.testId}
          className={classes.select__country}
          name={this.props.name}
          id={this.props.id}
          ref={this.props.refer}
        >
          <option value="none" hidden>
            Choose you country
          </option>
          {this.props.optionValues.map((value, index) => {
            return <option key={index}>{value}</option>;
          })}
        </select>
        <ValidatorMessage errorText={this.props.errorText} />
      </>
    );
  }
}
export default Select;
