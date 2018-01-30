import React from 'react';
import {UnderlinedLink} from 'styles/styled-components';
import {Point} from 'components/Project/styles';
import Project from 'components/Project';

const GuessingGame = () => (
  <Project
    title="Guessing Game">
    <Point>
      <UnderlinedLink href="https://github.com/yifei2016/jest.test.exercise" target="_blank">
      https://github.com/yifei2016/jest.test.exercise
    </UnderlinedLink>
    </Point>
    <Point>
    Första spel som använder python programmering språk. I den här spelen programmerade 
    jag med python, det var min första programmering produkt efter jag har lärt mig python 
    själv för tre månader genom bok.
    </Point>
    <Point>
      <UnderlinedLink href="https://github.com/yifei2016" target="_blank">Nyckelord: </UnderlinedLink>
      Python, Git, GitHub.
    </Point>
  </Project>
);

export default GuessingGame;