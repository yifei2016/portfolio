import React from 'react';
import {UnderlinedLink} from 'styles/styled-components';
import {Point, KeywordsTitle, Keywords} from 'components/Project/styles';
import Project from 'components/Project';

const AwesomeBook = () => (
  <Project  href="https://github.com/yifei2016/great-book/tree/master/task" title="AwesomeBook">
    <Point>
    På webbsidan kan man lägga på nya böker till Firebase och se vilka böcker som finns med 
    en tabell, samt ändra och ta bort en befintlig bok. Webbsidan kan också begära en API 
    nyckel och visar eventuella felmeddelanden som inträffar, webbsidan är responsiv 
    och har en pagination som man kan gå fram och gå tillbaka för att se vissa böcker per 
    page genom pagination, det finns även en google map på kontakt sidan så kan man se butikens 
    adress på karta. Jag klarade hela projekt.
    </Point>
    <Point>
      <KeywordsTitle>Nyckelord:</KeywordsTitle>&nbsp;&nbsp;
      <Keywords>HTML5, CSS3, JavaScript6, Photoshop, flex, Bootstrap, AJAX, Git, DOM, API, Google map. </Keywords>
    </Point>
  </Project>
);

export default AwesomeBook;