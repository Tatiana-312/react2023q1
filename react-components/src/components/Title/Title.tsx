import React from 'react';
import classes from './Title.module.css';
import { titleProps } from './titleProps.interface';

class Title extends React.Component<titleProps> {
  constructor(props: titleProps) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2 className={classes.title}>{this.props.pageTitle}</h2>
      </div>
    );
  }
}

export default Title;
