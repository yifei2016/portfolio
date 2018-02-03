import React from 'react';
import {Point, KeywordsTitle, Keywords} from 'components/Project/styles';
import Project from 'components/Project';

const Webshop = () => (
  <Project  href="reduxproject.surge.sh" title="Webshop">
    <Point>
    En webshop sidan som man kan klicka på olika knappar nedanför varor för att gå till kassan sidan och betala, 
    det här projekt kan också spåra användares handlingar som visas på sidan. Jag jobbade med front end utveckling.
    </Point>
    <Point>
      <KeywordsTitle>Nyckelord:</KeywordsTitle>&nbsp;&nbsp;
      <Keywords>
      HTML5, CSS3, Css transition, JavaScript 6, Bootstrap 4, Bootstrap modal, React.js, Redux, Git.
      </Keywords>
    </Point>
  </Project>
);

export default Webshop;