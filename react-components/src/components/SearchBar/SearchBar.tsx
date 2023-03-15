import React from 'react';
import classes from './SearchBar.module.css';

class SearchBar extends React.Component {
  render(): React.ReactNode {
    return (
      <form className={classes.form}>
        <input className={classes.input} type="text" placeholder="Type text here" />
        <button className={classes.button} type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
