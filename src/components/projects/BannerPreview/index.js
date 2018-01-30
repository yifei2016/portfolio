import React from 'react';
import {UnderlinedLink} from 'styles/styled-components';
import {Point, KeywordsTitle, Keywords} from 'components/Project/styles';
import Project from 'components/Project';

const BannerPreview = () => (
  <Project href="https://demo.fullystudios.se/banner-preview/" title="Banner Preview">
    <Point>
      Ett projekt som använder webpack för att bygga hela projekt struktur, och React.js som
    ramverk, detta projekt är att visa olika banners som är Iframe och video format
    som hämtas dynamiskt från json fil. Applikationen har en responsiv design med Flexbox och
    Media queries, Jag jobbade med hela front end utveckling och deploy, QA.
    </Point>
    <Point>
      <KeywordsTitle>Nyckelord:</KeywordsTitle>&nbsp;&nbsp;
      <Keywords>
        HTML5, CSS3, JavaScript 6, Bootstrap 4, React, Webpack, Axios, React-router, Babel polyfill,
        FlexBox, Iframe, Font awesome, google font, Node.js, Git, SCRUM, Agile metoder, Jira, Cyberduck, FTP server. 
      </Keywords>
    </Point>
  </Project>
);

export default BannerPreview;