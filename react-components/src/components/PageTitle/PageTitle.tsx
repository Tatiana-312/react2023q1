import React from 'react';
import { PageTitleProps } from './pageTitle.interface';
import classes from './PageTitle.module.css';

class PageTitle extends React.Component<PageTitleProps> {
  constructor(props: PageTitleProps) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 className={classes.title}>{this.props.currentPage} page</h1>
      </div>
    );
  }
}

export default PageTitle;
