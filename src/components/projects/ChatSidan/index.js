import React from 'react';
import {UnderlinedLink} from 'styles/styled-components';
import {Point} from 'components/Project/styles';
import Project from 'components/Project';

const ChatSidan = () => (
  <Project
    title="ChatSidan">
    <Point>
      <UnderlinedLink href="https://github.com/yifei2016/localStorage-firebase" target="_blank">
      https://github.com/yifei2016/localStorage-firebase
    </UnderlinedLink>
    </Point>
    <Point>
    När man kommer till sidan första gången kan man spara sitt namn med ett formuläret, 
    och sen namnet visas på webbsidan. Efter man har loggat in, kan man skriva ett 
    meddelande via textarea sen kan det sparas i Firebase databasen, alla meddelandet 
    visas i en tabell med det nyaste överst, där besökaren kan gilla/ogilla meddelanden 
    via knappar och databasen uppdateras dynamiskt. 
    </Point>
    <Point>
      <UnderlinedLink href="https://github.com/yifei2016" target="_blank">Nyckelord: </UnderlinedLink>
      HTML5, CSS3, JavaScript, Firebase, localStorage, DOM, Git.
    </Point>
  </Project>
);

export default ChatSidan;