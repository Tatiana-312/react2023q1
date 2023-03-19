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
        <fieldset className={classes.radio_switch}>
          <div className={classes.radio_switch__inner}>
            <input type="radio" name={this.props.name} id="public" />
            <label className={classes.toggle__option} htmlFor="public">
              {this.props.firstOption}
            </label>

            <input type="radio" name={this.props.name} id="private" />
            <label className={classes.toggle__option} htmlFor="private">
              {this.props.secondOption}
            </label>
          </div>
        </fieldset>
      </>
    );
  }
}
export default ToggleSwitch;
