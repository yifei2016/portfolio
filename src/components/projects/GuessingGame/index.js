import React from 'react';
import {UnderlinedLink} from 'styles/styled-components';
import {Point, KeywordsTitle, Keywords} from 'components/Project/styles';
import Project from 'components/Project';

const GuessingGame = () => (
  <Project href="https://github.com/yifei2016/jest.test.exercise" title="Guessing Game">
    <Point>
    Första spel som använder python programmering språk. Det här spelet programmerade jag efter 
    jag har lärt mig python själv för tre månader genom bok. Användare kan gissa ett nummer som är mellan 
    1 till 1000, spelet spelar in hur många gånger man har spelat, om det numret som man gissat är detsamma 
    som programmet skapade, så visas texten ‘correct’ medan man spelar, kan tips visas om numret är för stort 
    eller för litet. Efter att man har skrivit rätt nummer, så frågar programmet om användare vill spela igen, 
    sen fortsätter man eller avsluta spelet. 
    </Point>
    <Point>
      <KeywordsTitle>Nyckelord:</KeywordsTitle>&nbsp;&nbsp;
      <Keywords>Python, Git, GitHub.</Keywords>
    </Point>
  </Project>
);

export default GuessingGame;