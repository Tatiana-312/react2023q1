import React from 'react';
import ValidatorMessage from '../ValidatorErrorMessage/ValidatorMessage';
import classes from './ToggleSwitch.module.css';
import { ToggleSwitchProps } from './ToggleSwitchProps.interface';

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  testId,
  title,
  firstOption,
  secondOption,
  name,
  register,
  required,
  isErrors,
  errorText,
  onChange,
}) => {
  return (
    <>
      <p className={classes.toggle__title}>{title}</p>
      <fieldset data-testid={testId} className={classes.radio_switch}>
        <div className={classes.radio_switch__inner}>
          <input
            data-testid={`${name}-first`}
            type="radio"
            value={firstOption}
            id={firstOption}
            {...register(name, { required: required })}
            onChange={onChange}
          />
          <label className={classes.toggle__option} htmlFor={firstOption}>
            {firstOption}
          </label>

          <input
            data-testid={`${name}-second`}
            type="radio"
            value={secondOption}
            id={secondOption}
            {...register(name, { required: required })}
            onChange={onChange}
          />
          <label className={classes.toggle__option} htmlFor={secondOption}>
            {secondOption}
          </label>
        </div>
      </fieldset>
      {isErrors ? <ValidatorMessage errorText={errorText} /> : <ValidatorMessage errorText="" />}
    </>
  );
};
export default ToggleSwitch;
