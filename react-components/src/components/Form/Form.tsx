import Input from '../../components/Input/Input';
import React from 'react';
import Select from '../../components/Select/Select';
import Checkbox from '../../components/Checkbox/Checkbox';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch';
import classes from './Form.module.css';
import { CardsData } from './cardsData.interface';
import { FormProps } from './formProps.interface';

class Form extends React.Component<FormProps> {
  nameInput: React.RefObject<HTMLInputElement>;
  surnameInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  countrySelect: React.RefObject<HTMLSelectElement>;
  fileInput: React.RefObject<HTMLInputElement>;
  paymentSwitch: React.RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);
    this.nameInput = React.createRef();
    this.surnameInput = React.createRef();
    this.dateInput = React.createRef();
    this.countrySelect = React.createRef();
    this.fileInput = React.createRef();
    this.paymentSwitch = React.createRef();
  }

  getCurrentSwitchValue = (isChecked: boolean): string => {
    return isChecked ? 'Cash' : 'Card';
  };

  handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const inputBookCover = this.fileInput.current as HTMLInputElement;
    const cardsData: CardsData = {
      name: (this.nameInput.current as HTMLInputElement).value,
      surname: (this.surnameInput.current as HTMLInputElement).value,
      date: (this.dateInput.current as HTMLInputElement).value,
      country: (this.countrySelect.current as HTMLSelectElement).value,
      file: URL.createObjectURL((inputBookCover.files as FileList)[0]),
      payment: this.getCurrentSwitchValue((this.paymentSwitch.current as HTMLInputElement).checked),
    };

    this.props.uploadCard(cardsData);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input type="text" label="Name" name="name" refer={this.nameInput} />
        <Input type="text" label="Surname" name="surname" refer={this.surnameInput} />
        <Input type="date" label="Date of delivery" name="date" refer={this.dateInput} />
        <Select
          id="country"
          label="Choose your country"
          name="country"
          optionValues={[
            'Belarus',
            'Georgia',
            'Germany',
            'Kazakhstan',
            'Kyrgyzstan',
            'Poland',
            'Russia',
            'Ukraine',
            'Uzbekistan',
          ]}
          refer={this.countrySelect}
        />
        <Input type="file" label="Book cover" name="file" refer={this.fileInput} />
        <ToggleSwitch
          title="Will you pay in cash or by credit card?"
          firstOption="Cash"
          secondOption="Credit Card"
          name="payment"
          refer={this.paymentSwitch}
        />
        <Checkbox name="permission" label="I consent to my personal data" />
        <input className={classes.submit__button} type="submit" value="submit" />
      </form>
    );
  }
}

export default Form;
