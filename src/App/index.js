import React, { Component } from 'react';
import 'css/main.css';
import YifeiInfo from 'components/YifeiInfo';
import RightPanel from 'components/RightPanel';
import {Wrapper, Main, Sides, Nav, Left, Right} from './styles';
class App extends Component {
  render() {
      return (
      <Wrapper >
        <Nav className="navbar">
            <p className="navbar__cv">Cv</p>
            <p>Personal letter</p>
        </Nav>
        <Main>
          <Sides>
            <Left><YifeiInfo/></Left>
            <Right><RightPanel/></Right>
          </Sides>
        </Main>
      </Wrapper>
    );
  }
}

export default App;
