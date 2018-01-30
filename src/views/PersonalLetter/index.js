import React, { Component } from 'react';
import 'css/main.css';
import YifeiInfo from 'components/YifeiInfo';
import RightPanel from 'components/RightPanel';
import MouseScroll from 'components/MouseScroll';
import ReactDOm from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {Wrapper, Main, Sides, Left, Right} from './styles';

class PersonalLetter extends Component {
  render() {
      return (
      <Wrapper >
        <Main>
          <Sides>
            <Left><YifeiInfo iconColor='darkgrey'/></Left> 
            <Right>
              Yifei Wang heter jag som pluggar Front end utveckling på EC- utbildning och tar praktiken hos Fully Studios, 
              Jag är förtjust i mitt karriär området och har stor passion att utveckla mig.
              <br/><br/>
              Innan jag pluggar på EC yrkeshögskolan hade jag erfarenheter med redovisning, när jag jobbade med ekonomi, det mesta jobbet är gjort av program och jag insåg alla branscher går till digital, web utveckling ger man visuell feedback, det är häftigt. Sen började jag lära mig själv python programmering språk, jag kom på mig att vara intresserad av programmering, därmed började jag min utbildning som är ganska bra och gav mig grundläggande till avancerad kunskaperna av web design, front end och backend utveckling. Förutom skolan, har jag också gjort några hobby projekt som publiceras på min Github.
              <br/><br/>
              Jag är flitig, prestigelös och har behärskat vassa tekniker för att få jobbet, jag är sugen på att erövra mer på webb utvecklingen.
              Jag tycker om att arbeta i grupp och jag anses vara en flexibel, initiativtagande, samarbetsvillig och målinriktad person. Mina styrkor är att jag är nyfiken på nya saker och har snabb inlärningsförmåga.
              <br/><br/>
              På fritiden försöker jag vara ute och röra på mig så mycket som möjlighet. Jag tycker om att promenera i skogen och spela badminton.
              Med detta hoppas jag att jag har väckt din intressen, jag kommer gärna på besök och berätta mer om mig själv.
            </Right>
          </Sides>
        </Main>
      </Wrapper>
    );
  }
}

export default PersonalLetter;

