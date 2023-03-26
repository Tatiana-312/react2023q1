import Input from '../../components/Input/Input';
import React from 'react';
import Select from '../../components/Select/Select';
import Checkbox from '../../components/Checkbox/Checkbox';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch';
import classes from './Form.module.css';
import { CardData } from './cardData.interface';
import { FormProps } from './formProps.interface';
import { FormState } from './formState.interface';
import DataSaveMessage from '../DataSaveMessage/DataSaveMessage';
import FormValidatorService from './formValidator.service';
import Constants from './constants';

class Form extends React.Component<FormProps, FormState> {
  formValidatorService: FormValidatorService;
  constants: Constants;
  nameInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  countrySelect: React.RefObject<HTMLSelectElement>;
  fileInput: React.RefObject<HTMLInputElement>;
  paymentSwitch: React.RefObject<HTMLInputElement>;
  permissionCheckbox: React.RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);
    this.nameInput = React.createRef();
    this.dateInput = React.createRef();
    this.countrySelect = React.createRef();
    this.fileInput = React.createRef();
    this.paymentSwitch = React.createRef();
    this.permissionCheckbox = React.createRef();
    this.formValidatorService = new FormValidatorService(this);
    this.constants = new Constants(this);

    this.state = {
      nameError: '*',
      dateError: '*',
      fileError: '*',
      selectError: '*',
      checkboxError: '*',
      dataSaveMessage: '',
    };
  }

  setSuccessMessage = (): void => {
    this.setState({
      dataSaveMessage: 'Data saved successfully!',
    });
  };

  resetValues = (): void => {
    this.nameInput.current!.value = '';
    this.dateInput.current!.value = '';
    this.countrySelect.current!.value = 'none';
    this.fileInput.current!.value = '';
    this.paymentSwitch.current!.checked = false;
    this.permissionCheckbox.current!.checked = false;
  };

  getCurrentSwitchValue = (isChecked: boolean): string => {
    return isChecked ? 'Cash' : 'Card';
  };

  getCardData = (): CardData => {
    return {
      name: this.nameInput.current!.value,
      date: this.dateInput.current!.value,
      country: this.countrySelect.current!.value,
      file: URL.createObjectURL((this.fileInput.current!.files as FileList)[0]),
      payment: this.getCurrentSwitchValue(this.paymentSwitch.current!.checked),
    };
  };

  handleSubmit: React.FormEventHandler<HTMLFormElement> = (event): void => {
    event.preventDefault();

    if (this.formValidatorService.isValuesValid()) {
      const cardData: CardData = this.getCardData();
      this.props.saveCard(cardData);
      this.setSuccessMessage();
      this.resetValues();
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.constants.inputsProperties.map((props, index) => {
          return (
            <Input
              testId={props.testId}
              type={props.type}
              label={props.label}
              name={props.name}
              refer={props.refer}
              onChange={() => this.setState({ dataSaveMessage: '' })}
              errorText={this.state[`${props.name}Error`]}
              key={index}
            />
          );
        })}
        <Select
          testId="select-country"
          id="country"
          label="Country"
          name="country"
          optionValues={this.constants.countries}
          refer={this.countrySelect}
          errorText={this.state.selectError}
        />
        <ToggleSwitch
          testId="switch-payment"
          title="Will you pay in cash or by credit card?"
          firstOption="Cash"
          secondOption="Credit Card"
          name="payment"
          refer={this.paymentSwitch}
        />
        <Checkbox
          testId="checkbox-permission"
          name="permission"
          label="I consent to my personal data"
          refer={this.permissionCheckbox}
          errorText={this.state.checkboxError}
        />
        <input
          data-testid="input-submit"
          className={classes.submit__button}
          type="submit"
          value="submit"
        />
        <DataSaveMessage dataSaveMessage={this.state.dataSaveMessage} />
      </form>
    );
  }
}

export default Form;
