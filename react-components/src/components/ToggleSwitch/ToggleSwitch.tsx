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
        <fieldset data-testid={this.props.testId} className={classes.radio_switch}>
          <div className={classes.radio_switch__inner}>
            <input
              type="radio"
              name={this.props.name}
              id={this.props.firstOption}
              ref={this.props.refer}
            />
            <label className={classes.toggle__option} htmlFor={this.props.firstOption}>
              {this.props.firstOption}
            </label>

            <input type="radio" name={this.props.name} id={this.props.secondOption} />
            <label className={classes.toggle__option} htmlFor={this.props.secondOption}>
              {this.props.secondOption}
            </label>
          </div>
        </fieldset>
      </>
    );
  }
}
export default ToggleSwitch;
