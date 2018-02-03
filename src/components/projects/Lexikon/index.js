import React from 'react';
import {UnderlinedLink} from 'styles/styled-components';
import {Point, KeywordsTitle, Keywords} from 'components/Project/styles';
import Project from 'components/Project';

const Lexikon = () => (
  <Project href="https://github.com/yifei2016/klartext-vue" title="Lexikon(Hobby projekt)">
    <Point>
    En lexikon-webbapplikation, man som har loggat in kan hämta data från databas, och sortera, läsa, ta bort, 
    uppdatera data beroende på användarens val på sidan, jag jobbade med front end utveckling, min kompis 
    jobbade med backend utveckling som använde sig med java, spring boot, 
    Docker, jag har utvecklat en viss förståelse för Docker genom detta projekt.
    </Point>
    <Point>
      <KeywordsTitle>Nyckelord:</KeywordsTitle>&nbsp;&nbsp;
      <Keywords>
        HTML5, CSS3, JavaScript 6, Bootstrap 4, Vue.js, Vue-select, Vue-resource, Vue-multiselect,
        vue-js-popover, bootstrap-vue, Vue-router, Node.js, Git, Ajax, REST, Java, Spring Boot,  Docker.
     </Keywords>
    </Point>
  </Project>
);

export default Lexikon;