import Title from '../../components/Title/Title';
import React from 'react';

const About: React.FC = () => {
  return (
    <div data-testid="about-page">
      <Title {...{ title: 'About our Book Shop' }} />
    </div>
  );
};

export default About;
