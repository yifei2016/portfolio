import React from 'react';
import {UnderlinedLink} from 'styles/styled-components';
import {Point, KeywordsTitle, Keywords} from 'components/Project/styles';
import Project from 'components/Project';

const GuessingGame = () => (
  <Project href="https://github.com/yifei2016/jest.test.exercise" title="Guessing Game">
    <Point>
    Första spel som använder python programmering språk. I den här spelen programmerade 
    jag med python, det var min första programmering produkt efter jag har lärt mig python 
    själv för tre månader genom bok. Användare kan gissa ett nummer som mellan 1 till 1000, spelet 
    spelar in hur många gånger man har spelat, om det numret som man gissat är samma som program skapade,
    medan man spelar, kan tips visas om numret är för stor eller för mindre, när användare gissade rätt, då  
    visar text 'correct! you guessed the correct number in 5 times, Do you want to play again?'
    </Point>
    <Point>
      <KeywordsTitle>Nyckelord:</KeywordsTitle>&nbsp;&nbsp;
      <Keywords>Python, Git, GitHub.</Keywords>
    </Point>
  </Project>
);

export default GuessingGame;