import React from 'react';
import {UnderlinedLink} from 'styles/styled-components';
import {Point, KeywordsTitle, Keywords} from 'components/Project/styles';
import Project from 'components/Project';

const ClientZone = () => (
  <Project href="https://github.com/yifei2016" title="Client Zone">
    <Point>
    Ett projekt som använder sig vue.js som front end ramverk och mysql databas, laravel som backend ramverk 
    till PHP. Kunder kan se olika projekt info på webbsidan och admin kan CRUD projekt efter validering med 
    projekts namn, status och link infomationer. Som kund kan man ladda upp video och filen via webbsidan och mjukt, 
    hård ta bort data som hämtas från mysql databasen. Alla användare kan se sina projekt med client attribute genom teknik 
    av ORM Relational Model i laravel, Min roll är att jobba som full stack utvecklare, från design till backend och även deploy och QA.
    </Point>
    <Point>
    <KeywordsTitle>Nyckelord:</KeywordsTitle>&nbsp;&nbsp;
    <Keywords>
      HTML5, CSS3, JavaScript 6, Bootstrap 4, vue.js, node.js, mysql, php, laravel, ORM, 
      Axios, Ajax, REST, Sequel pro, Sass, BEM,Git, SCRUM, Agile metod, Jira, Browserstack, QA, 
      Bitbucket.
    </Keywords>
    </Point>
  </Project>
);

export default ClientZone;