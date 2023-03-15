import React from 'react';
import { InputState } from './inputState.interface';
import classes from './SearchBar.module.css';

class SearchBar extends React.Component<Record<string, never>, InputState> {
  constructor(props: Record<string, never>) {
    super(props);
    const localStorageData = localStorage.getItem('value');

    this.state = {
      text: localStorageData || '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.FormEvent<HTMLInputElement>): void {
    this.setState({ text: e.currentTarget.value });
  }

  componentWillUnmount(): void {
    localStorage.setItem('value', this.state.text);
  }

  render(): React.ReactNode {
    return (
      <form className={classes.form}>
        <input
          className={classes.input}
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Type text here"
        />
        <button className={classes.button} type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
