import React from 'react';
import { UnderlinedLink } from 'styles/styled-components';
import { Point } from 'components/Project/styles';
import Project from 'components/Project';

const CssAnimation = () => (
  <Project
    title="Css Animation(Hobby projekt)">
    <Point>
      <UnderlinedLink href="https://github.com/yifei2016" target="_blank">
        https://github.com/yifei2016
    </UnderlinedLink>
    </Point>
    <Point>
      Jag gjorde en enkel webbsidan för att visa mina några projekt länkar och mina kompetenser,
    det är ett hobby projekt, Jag använde mest css3 animation och transition tekniker som jag
    lärde mycket från arbetsplats.
    </Point>
    <Point>
      <UnderlinedLink href="https://github.com/yifei2016" target="_blank">Nyckelord: </UnderlinedLink>
      HTML5, Css3 animation, Css3 transition library, JavaScript 6, Bootstrap 4, Vue.js,
      Vue-router, Vue-star, Sass, BEM, bootstrap-vue, sweet-scroll.
    </Point>
  </Project>
);

export default CssAnimation;