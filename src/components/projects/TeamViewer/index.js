import React from 'react';
import {UnderlinedLink} from 'styles/styled-components';
import {Point} from 'components/Project/styles';
import Project from 'components/Project';

const TeamViewer = () => (
  <Project
    title="TeamViewer">
    <Point>
      <UnderlinedLink href="https://github.com/yifei2016/html-css-project" target="_blank">
      https://github.com/yifei2016/html-css-project
    </UnderlinedLink>
    </Point>
    <Point>
      Projekt är ett påhittat webb företag, Syftet med projektet är att träna på att
    använda HTML,CSS för att göra en sammanhängande webbsajt med en konsekvent design.
    Websajten ingår en beskrivning av företaget och presentation av våra team medlemmar
    med text och bild, presentation av företags produkter, en sida visar hur det skulle se
    ut om man lagt till några produkter i kundvagnen och är på väg att checka ut, en blog
    sida innehålller text och bild med flera längre artiklar efter varandra, en diskussionsforum
    sida med rubriker på trådar. Websidor är responsiva, enhetligt byggda och har genomtänkt och
    strukturerad design.
    </Point>
    <Point>
      <UnderlinedLink href="https://github.com/yifei2016" target="_blank">Nyckelord: </UnderlinedLink>
      HTML5, CSS3, flex, Media queries, Bootstrap, position, formulär, tabeller, GitHub.
    </Point>
  </Project>
);

export default TeamViewer;