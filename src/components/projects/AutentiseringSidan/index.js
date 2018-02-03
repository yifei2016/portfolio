import React from 'react';
import {UnderlinedLink} from 'styles/styled-components';
import {Point, KeywordsTitle, Keywords} from 'components/Project/styles';
import Project from 'components/Project';

const AutentiseringSidan = () => (
  <Project title="AutentiseringSidan" href="https://github.com/yifei2016/firebase-authentication">
    <Point>
    En sidan som använder Firebase för att autentisera mot GitHub.
    I webbsidan finns en knapp som man kan klicka på för att sätta igång autentisering mot GitHub, 
    om autentiseringen lyckas så navigeras man till nästa sidan som visar man är inloggad och 
    användarens namn och profilbild, dessutom kan man logga ut genom att klicka på ‘logga ut’ knappen på sidan, 
    om autentiseringen misslyckas så visar sidan ett felmeddelande. 
    </Point>
    <Point>
      <KeywordsTitle>Nyckelord:</KeywordsTitle>&nbsp;&nbsp;
      <Keywords>HTML5, CSS3, JavaScript, Firebase, GitHub, AJAX, sessionStorage, JSON, DOM, Git. </Keywords>
    </Point>
  </Project>
);

export default AutentiseringSidan;