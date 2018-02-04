import React from 'react';
import { UnderlinedLink } from 'styles/styled-components';
import {Point, KeywordsTitle, Keywords} from 'components/Project/styles';
import Project from 'components/Project';

const CssAnimation = () => (
  <Project href="http://yifeianimation.surge.sh" title="Css Animation(Hobby projekt)">
    <Point>
    Jag gjorde en enkel webbsidan för att visa mina några projekt länkar och mina kompetenser, 
    det är ett hobby projekt, Jag använde framförallt css3 animation och transition tekniker som jag lärde mycket från arbetsplats.
    </Point>
    <Point>
      <KeywordsTitle>Nyckelord:</KeywordsTitle>&nbsp;&nbsp;
      <Keywords>
        HTML5, Css3 animation, Css3 transition library, JavaScript 6, Bootstrap 4, Vue.js,
        Vue-router, Vue-star, Sass, BEM, bootstrap-vue, sweet-scroll.
      </Keywords>
    </Point>
  </Project>
);

export default CssAnimation;