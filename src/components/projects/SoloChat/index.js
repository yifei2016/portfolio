import React from 'react';
import {UnderlinedLink} from 'styles/styled-components';
import {Point, KeywordsTitle, Keywords} from 'components/Project/styles';
import Project from 'components/Project';

const SoloChat = () => (
  <Project href="https://github.com/yifei2016" title="Solo Chat(Hobby project)">
    <Point>
      En chat sidan som imiterar Slack program, man använder sig med denna för
      att skicka meddelanden, efter man tryckt på skick ikonen, man kan se meddelandet på
      chatt området,
      om man skrev olika kommando som börjar med slash, till exempel,
      om man skrev ‘/time’ så nuvarande tiden skickas till chatt området,
      om man skrev ‘/goodbye’ så goodbye meddelandet skickas till chatt området,
      om man skrev ‘/starwars’ så kommer det första resultatet skickas till chatt
      området av en API call. Det är läget till det här projeket just nu.
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