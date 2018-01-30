import React, { Component } from 'react';
import 'css/main.css';
import YifeiInfo from 'components/YifeiInfo';
import RightPanel from 'components/RightPanel';
import MouseScroll from 'components/MouseScroll';

import {Wrapper, Main, Sides, Nav, NavCv, NavLetter, Left, Right} from './styles';
class App extends Component {
  render() {
      return (
      <Wrapper >
        <Nav>
            <NavCv href="#">CV</NavCv>
            <NavLetter href="/personal">Personal letter</NavLetter>
        </Nav>
        <Main>
          <Sides>
            <Left><YifeiInfo/> <MouseScroll/></Left>
            <Right><RightPanel/></Right>
          </Sides>
        </Main>
      </Wrapper>
    );
  }
}

export default App;
