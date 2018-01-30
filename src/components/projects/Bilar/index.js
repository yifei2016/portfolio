import React from 'react';
import {UnderlinedLink} from 'styles/styled-components';
import {Point, KeywordsTitle, Keywords} from 'components/Project/styles';
import Project from 'components/Project';

const Bilar = () => (
  <Project href="https://github.com/yifei2016" title="Bilar">
    <Point>
    Det är ett projekt som visar olika bilar som hämtas från MongoDB databas med Axios, 
    webbsidan visar olika vyer för att läsa, uppdatera, ta bort, skapa bilar efter man är inloggd. 
    Vi tre i gruppen gjorde klart detta, jag jobbade med backend Api och några komponenter 
    av front end utveckling.
    </Point>
    <Point>
    <KeywordsTitle>Nyckelord:</KeywordsTitle>&nbsp;&nbsp;
    <Keywords>
      HTML5, CSS3, JavaScript, Bootstrap 4, Axios, REST, Ajax, Express.js, Node.js, React, 
      mongoose, MongoDB, Redux, Git.
    </Keywords>
    </Point>
  </Project>
);

export default Bilar;