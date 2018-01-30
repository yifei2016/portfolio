import React from 'react';
import {UnderlinedLink} from 'styles/styled-components';
import {Point} from 'components/Project/styles';
import Project from 'components/Project';

const AutentiseringSidan = () => (
  <Project
    title="AutentiseringSidan">
    <Point>
      <UnderlinedLink href="https://github.com/yifei2016/firebase-authentication" target="_blank">
      https://github.com/yifei2016/firebase-authentication
    </UnderlinedLink>
    </Point>
    <Point>
      En sidan använder Firebase och autentisera mot GitHub.
    I webbsidan finns en knapp som man kan klicka på för att sätta igång autentisering mot GitHub,
    om autentisering lyckas så man navigeras till nästa sidan som visar man är inloggad och
    användarens namn och profilbild, dessutom kan man logga ut genom att klicka på ‘logga ut’
    knappen på sidan, om autentisering misslyckas ska sidan visa ett felmeddelande.
    </Point>
    <Point>
      <UnderlinedLink href="https://github.com/yifei2016" target="_blank">Nyckelord: </UnderlinedLink>
      HTML5, CSS3, JavaScript, Firebase, GitHub, AJAX, sessionStorage, JSON, DOM, Git.
    </Point>
  </Project>
);

export default AutentiseringSidan;