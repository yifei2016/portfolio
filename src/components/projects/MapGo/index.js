import React from 'react';
import {UnderlinedLink} from 'styles/styled-components';
import {Point, KeywordsTitle, Keywords} from 'components/Project/styles';
import Project from 'components/Project';

const MapGo = () => (
  <Project href="https://github.com/yifei2016/localStorage-firebase" title="MapGo">
    <Point>
    I den här skolans grupp projekt, har jag gjort en förstudie med SCRUM-team om vad 
    vi ska göra med projekt, vi har använt kodgranskning och parprogramering för delar av projektet, 
    vi hade SCRUM-möten två gånger per vecka och en sprint varje vecka. Vi använde GIt och GitHub för 
    versionshantering, vi har gjort mockup och wireframe innan vi började koda. Applikationen har en responsiv 
    design med Flexbox och Media queries, man kan hämta data dynamiskt med AJAX från olika öppna API:er. Vi har 
    använt etablerade principer för UX design och layout regler, applikationen har en väl genomtänkt och uttryckt design.
    </Point>
    <Point>
      <KeywordsTitle>Nyckelord:</KeywordsTitle>&nbsp;&nbsp;
      <Keywords>HTML5, CSS3, JavaScript, Photoshop, flex, Media queries, AJAX, Git, SCRUM, Agile metoder.</Keywords>
    </Point>
  </Project>
);

export default MapGo;