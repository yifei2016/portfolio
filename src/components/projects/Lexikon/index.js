import React from 'react';
import {UnderlinedLink} from 'styles/styled-components';
import {Point} from 'components/Project/styles';
import Project from 'components/Project';

const Lexikon = () => (
  <Project
    title="Lexikon(Hobby projekt)">
    <Point>
      <UnderlinedLink href="https://github.com/yifei2016/klartext-vue" target="_blank">
      https://github.com/yifei2016/klartext-vue
    </UnderlinedLink>
    </Point>
    <Point>
      En lexikon webbapplikation, man som har loggat in kan hämta data från databas, och sortera,
    läsa, ta bort, uppdatera data beroende på användarens val på sidan, jag jobbade med front
    end utveckling, min kompis jobbade med backend utveckling som använde sig med java,
    spring boot, Docker, jag har skapat en viss förståelse för Docker genom detta projekt.
    </Point>
    <Point>
      <UnderlinedLink href="https://github.com/yifei2016" target="_blank">Nyckelord: </UnderlinedLink>
      HTML5, CSS3, JavaScript 6, Bootstrap 4, Vue.js, Vue-select, Vue-resource, Vue-multiselect,
     vue-js-popover, bootstrap-vue, Vue-router, Node.js, Git, Ajax, REST, Java, Spring Boot,  Docker.
    </Point>
  </Project>
);

export default Lexikon;