import React from 'react';
import classes from './About.module.css';

class About extends React.Component {
  render() {
    return (
      <div data-testid="about-page">
        <h2 className={classes.title}>About Us page</h2>
      </div>
    );
  }
}

export default About;