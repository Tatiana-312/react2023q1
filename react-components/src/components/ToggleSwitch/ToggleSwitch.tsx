import React from 'react';
import classes from './ToggleSwitch.module.css';
import { ToggleSwitchProps } from './ToggleSwitchProps.interface';

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  testId,
  title,
  firstOption,
  secondOption,
  name,
  register,
}) => {
  return (
    <>
      <p className={classes.toggle__title}>{title}</p>
      <fieldset data-testid={testId} className={classes.radio_switch}>
        <div className={classes.radio_switch__inner}>
          <input data-testid={`${name}-first`} type="radio" id={firstOption} {...register(name)} />
          <label className={classes.toggle__option} htmlFor={firstOption}>
            {firstOption}
          </label>

          <input data-testid={`${name}-second`} type="radio" id={secondOption} />
          <label className={classes.toggle__option} htmlFor={secondOption}>
            {secondOption}
          </label>
        </div>
      </fieldset>
    </>
  );
};
export default ToggleSwitch;
