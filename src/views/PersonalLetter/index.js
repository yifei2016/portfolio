import React, { Component } from 'react';
import 'css/main.css';
import YifeiInfo from 'components/YifeiInfo';
import RightPanel from 'components/RightPanel';
import MouseScroll from 'components/MouseScroll';
import ReactDOm from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Wrapper, Main, Sides, Left, Right } from './styles';

class PersonalLetter extends Component {
  render () {
    return (
      <Wrapper >
        <Main>
          <Sides>
            <Left><YifeiInfo iconColor='darkgrey' /></Left>
            <Right>
              <div>
                <div>
                  Yifei Wang heter jag och jobbar som en Front-end utvecklare på <span><a href="https://www.kvd.se/" target="_blank">Kvdbil</a></span>.
                  Jag är förtjust i mitt karriärområde och har en stor passion att utveckla mig.
              </div>
                <br />
                Innan jag jobbar med webbutveckling hade jag erfarenheter med redovisning. När jag jobbade med ekonomi, det mesta jobbet var gjort av program och jag insåg alla branscher går till digital, webbutveckling ger man visuell feedback, det är häftigt. Sen började jag lära mig programmering själv, jag kom på mig att vara intresserad av programmering, därmed började jag min utbildning som var ganska bra och gav mig grundläggande till avancerad kunskaperna av web design, front end och backend utveckling. Förutom skolan, hade jag också gjort några hobby projekt som publicerades på min Github.
              <br /><br />
                Jag är flitig, prestigelös och specialiserad på front-end web applikationsutveckling, jag är sugen på att erövra mer på webb utvecklingen.
                Jag tycker om att arbeta i grupp och jag anses vara en flexibel, initiativtagande, samarbetsvillig och målinriktad person. Mina styrkor är att jag är nyfiken på nya saker och har snabb inlärningsförmåga.
              <br /><br />
                På fritiden försöker jag vara ute och röra på mig så mycket som möjlighet. Jag tycker om att promenera i skogen och spela badminton.
              </div>
            </Right>
          </Sides>
        </Main>
      </Wrapper>
    );
  }
}

export default PersonalLetter;

