import React from 'react';
import {UnderlinedLink} from 'styles/styled-components';
import {Point} from 'components/Project/styles';
import Project from 'components/Project';

const SorteringFirebase = () => (
  <Project
    title="SorteringFirebase">
    <Point>
      <UnderlinedLink href="https://github.com/yifei2016" target="_blank">
        https://github.com/yifei2016
    </UnderlinedLink>
    </Point>
    <Point>
    En webbsida använder Firebase funktioner för att sortera och filtrera produkter beroende 
    på produkts pris och namnens alfabetisk ordningen, och man kan se data som ligger i 
    databasen med begränsad mängd genom att välja siffror för mängd via en knappen på webbsidan.
    </Point>
    <Point>
      <UnderlinedLink href="https://github.com/yifei2016" target="_blank">Nyckelord: </UnderlinedLink>
      HTML5, CSS3, JavaScript, Firebase, Git, DOM, GitHub.
    </Point>
  </Project>
);

export default SorteringFirebase;