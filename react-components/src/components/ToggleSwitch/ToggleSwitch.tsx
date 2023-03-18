import React from 'react';
import classes from './ToggleSwitch.module.css';

class ToggleSwitch extends React.Component {
  render() {
    return (
      <>
        <p className={classes.toggle__title}>Will you pay in cash or by credit card?</p>
        <span className={classes.toggle__option}>Cash</span>
        <label className={classes.switch}>
          <input className={classes.switch__input} type="Checkbox" name="sale" />
          <span className={classes.slider}></span>
        </label>
        <span className={classes.toggle__option}>Credit Card</span>
      </>
    );
  }
}
export default ToggleSwitch;