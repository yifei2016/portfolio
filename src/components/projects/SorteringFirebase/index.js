import React from 'react';
import {UnderlinedLink} from 'styles/styled-components';
import {Point, KeywordsTitle, Keywords} from 'components/Project/styles';
import Project from 'components/Project';

const SorteringFirebase = () => (
  <Project href="https://github.com/yifei2016" title="SorteringFirebase">
    <Point>
    En webbsida använder Firebase funktioner för att sortera och filtrera produkter beroende 
    på produkts pris och namnens alfabetisk ordningen, och man kan se data som ligger i 
    databasen med begränsad mängd genom att välja siffror för mängd via en knappen på webbsidan.
    </Point>
    <Point>
      <KeywordsTitle>Nyckelord:</KeywordsTitle>&nbsp;&nbsp;
      <Keywords>
        HTML5, CSS3, JavaScript, Firebase, Git, DOM, GitHub.
      </Keywords>
    </Point>
  </Project>
);

export default SorteringFirebase;