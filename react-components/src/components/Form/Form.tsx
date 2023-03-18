import Input from '../../components/Input/Input';
import React from 'react';

class Form extends React.Component {
  nameInput: React.RefObject<HTMLInputElement>;
  surnameInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  fileInput: React.RefObject<HTMLInputElement>;

  constructor(props: Record<string, never>) {
    super(props);
    this.nameInput = React.createRef();
    this.surnameInput = React.createRef();
    this.dateInput = React.createRef();
    this.fileInput = React.createRef();
  }

  handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log((this.nameInput.current as HTMLInputElement).value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input type="text" label="Name" name="name" refer={this.nameInput} />
        <Input type="text" label="Surname" name="surname" refer={this.surnameInput} />
        <Input type="date" label="Date of delivery" name="date" refer={this.dateInput} />
        <Input type="file" label="Book cover" name="file" refer={this.fileInput} />
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default Form;
