import React from 'react';
import {UnderlinedLink} from 'styles/styled-components';
import {Point} from 'components/Project/styles';
import Project from 'components/Project';

const Bilar = () => (
  <Project
    title="Bilar">
    <Point>
      <UnderlinedLink href="https://github.com/yifei2016" target="_blank">
        https://github.com/yifei2016
    </UnderlinedLink>
    </Point>
    <Point>
    Det är ett projekt som visar olika bilar som hämtas från MongoDB databas med Axios, 
    webbsidan visar olika vyer för att läsa, uppdatera, ta bort, skapa bilar efter man är inloggd. 
    Vi tre i gruppen gjorde klart detta, jag jobbade med backend Api och några komponenter 
    av front end utveckling.
    </Point>
    <Point>
      <UnderlinedLink href="https://github.com/yifei2016" target="_blank">Nyckelord: </UnderlinedLink>
      HTML5, CSS3, JavaScript, Bootstrap 4, Axios, REST, Ajax, Express.js, Node.js, React, 
      mongoose, MongoDB, Redux, Git.
    </Point>
  </Project>
);

export default Bilar;