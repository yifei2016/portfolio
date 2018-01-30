import React from 'react';
import {UnderlinedLink} from 'styles/styled-components';
import {Point} from 'components/Project/styles';
import Project from 'components/Project';

const Signatur = () => (
  <Project
    title="Signatur">
    <Point>
      <UnderlinedLink href="https://demo.fullystudios.se/linderoths/mailsignatur/#/" target="_blank">
      https://demo.fullystudios.se/linderoths/mailsignatur/#/
    </UnderlinedLink>
    </Point>
    <Point>
      En sidan som visar ett formulär med olika kunders kontakt info, och alla info är sparas
    i local storage, så slipper man skriva igen på nästa log in. Och när det är mejl adress och
    telefon nummer, man kan klicka på dem och gå till Mail och Facetime på Mac automatiskt.
    </Point>
    <Point>
      <UnderlinedLink href="https://github.com/yifei2016" target="_blank">Nyckelord: </UnderlinedLink>
      HTML5, CSS3, JavaScript 6, Bootstrap 4, js6, Vue.js, Sass, BEM, Git, localstorage, 
      Cyberduck, FTP server.
    </Point>
  </Project>
);

export default Signatur;