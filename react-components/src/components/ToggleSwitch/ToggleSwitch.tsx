import React from 'react';
import classes from './ToggleSwitch.module.css';
import { ToggleSwitchProps } from './ToggleSwitchProps.interface';

class ToggleSwitch extends React.Component<ToggleSwitchProps> {
  constructor(props: ToggleSwitchProps) {
    super(props);
  }

  render() {
    return (
      <>
        <p className={classes.toggle__title}>{this.props.title}</p>
        <span className={classes.toggle__option}>{this.props.firstOption}</span>
        <label className={classes.switch}>
          <input className={classes.switch__input} type="Checkbox" name={this.props.name} />
          <span className={classes.slider}></span>
        </label>
        <span className={classes.toggle__option}>{this.props.secondOption}</span>
      </>
    );
  }
}
export default ToggleSwitch;
