import React from 'react';
import { InputProps } from './inputProps.interface';
import classes from './Input.module.css';

class Input extends React.Component<InputProps> {
  constructor(props: InputProps) {
    super(props);
  }
  render() {
    return (
      <label className={classes.label}>
        {this.props.label}
        <input
          className={classes.input}
          type={this.props.type}
          name={this.props.name}
          ref={this.props.refer}
          onChange={this.props.onChange}
          required
        />
      </label>
    );
  }
}

export default Input;
