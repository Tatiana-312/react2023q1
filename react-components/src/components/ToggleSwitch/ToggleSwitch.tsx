import React from 'react';
import classes from './ToggleSwitch.module.css';

class ToggleSwitch extends React.Component {
  render() {
    return (
      <>
        <p>Will you pay in cash or by credit card?</p>
        <span>Cash</span>
        <label className={classes.switch}>
          <input className={classes.switch__input} type="Checkbox" name="sale" />
          <span className={classes.slider}></span>
        </label>
        <span>Credit Card</span>
      </>
    );
  }
}
export default ToggleSwitch;