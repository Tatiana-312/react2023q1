import React from 'react';
import classes from './Title.module.css';
import { TitleProps } from './titleProps.interface';

class Title extends React.Component<TitleProps> {
  constructor(props: TitleProps) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2 className={classes.title}>{this.props.title}</h2>
      </div>
    );
  }
}

export default Title;
