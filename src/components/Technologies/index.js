import React from 'react';
import {Wrapper, SectionTitle, ListItem, UnderlinedLink, UnorderedList} from 'styles/styled-components';

const Technologies = () => (
  <Wrapper id="technologies" className="animated fadeInDown">
    <SectionTitle> Technologies I have used </SectionTitle>
    <UnorderedList>
      <ListItem>
        <span>
          HTML5, CSS3, Javascript6, Promise, React.js, Redux, Vue.js, Python, Object-oriented programming, 
          PHP, Laravel, Node.js, Express.js, Webpack, 
          Sass, BEM, styled-components, MySql, MVC, MongoDB, Mongoose, REST, 
          Ajax, Raect-router, Vue-router, Babel polyfill
          Jest test, TDD, DDD, QA, Materialize, Twitter Bootstrap 3.0 & 4.0, 
          Scrum/Agil metod, Firebase, Jira, Trello, Blade/Pug,
        </span>
        <UnderlinedLink target="_blank" href="https://github.com/yifei2016">
          Git
        </UnderlinedLink>
        <span> etc.</span>
      </ListItem>
    </UnorderedList>
  </Wrapper>
);

export default Technologies;