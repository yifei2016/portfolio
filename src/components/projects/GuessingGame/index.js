import React from 'react';
import {UnderlinedLink} from 'styles/styled-components';
import {Point, KeywordsTitle, Keywords} from 'components/Project/styles';
import Project from 'components/Project';

const GuessingGame = () => (
  <Project href="https://github.com/yifei2016/jest.test.exercise" title="Guessing Game">
    <Point>
    Första spel som använder python programmering språk. I den här spelen programmerade 
    jag med python, det var min första programmering produkt efter jag har lärt mig python 
    själv för tre månader genom bok.
    </Point>
    <Point>
      <KeywordsTitle>Nyckelord:</KeywordsTitle>&nbsp;&nbsp;
      <Keywords>Python, Git, GitHub.</Keywords>
    </Point>
  </Project>
);

export default GuessingGame;