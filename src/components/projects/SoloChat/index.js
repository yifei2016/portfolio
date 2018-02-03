import React from 'react';
import {UnderlinedLink} from 'styles/styled-components';
import {Point, KeywordsTitle, Keywords} from 'components/Project/styles';
import Project from 'components/Project';

const SoloChat = () => (
  <Project href="solochat.surge.sh" title="Solo Chat(Hobby project)">
    <Point>
    En chat sidan som imiterar Slack program, man använder denna för att skicka meddelanden, 
    efter man tryckt på skick-ikonen så kan man se meddelandet på chatt området.
    om man skrev olika kommando som börjar med slash, till exempel, om man skriver ‘/time’ 
    så nuvarande tiden skickas till chatt området,  om man skriver ‘/starwars’ 
    så kommer det första resultatet skickas till chatt området av en API call. Input fältet har 
    autofocus, knappar har disabled läget. Det är läget för det här projeket just nu.
    </Point>
    <Point>
      <KeywordsTitle>Nyckelord:</KeywordsTitle>&nbsp;&nbsp;
      <Keywords>
        HTML5, CSS3, JavaScript 6, Bootstrap 4, React.js, Redux, node.js, Axios,
        Ajax, REST, Styled component,Git, refactor metod.
      </Keywords>
    </Point>
  </Project>
);

export default SoloChat;