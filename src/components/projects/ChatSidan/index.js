import React from 'react';
import {UnderlinedLink} from 'styles/styled-components';
import {Point, KeywordsTitle, Keywords} from 'components/Project/styles';
import Project from 'components/Project';

const ChatSidan = () => (
  <Project href="https://github.com/yifei2016/localStorage-firebase"  title="ChatSidan">
    <Point>
    När man kommer till sidan första gången kan man spara sitt namn med ett formuläret, 
    och sen namnet visas på webbsidan. Efter man har loggat in, kan man skriva ett 
    meddelande via textarea sen kan det sparas i Firebase databasen, alla meddelandet 
    visas i en tabell med det nyaste överst, där besökaren kan gilla/ogilla meddelanden 
    via knappar och databasen uppdateras dynamiskt. 
    </Point>
    <Point>
      <KeywordsTitle>Nyckelord:</KeywordsTitle>&nbsp;&nbsp;
      <Keywords>
        HTML5, CSS3, JavaScript, Firebase, localStorage, DOM, Git.
      </Keywords>
    </Point>
  </Project>
);

export default ChatSidan;