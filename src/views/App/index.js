import React, { Component } from 'react';
import 'css/main.css';
import YifeiInfo from 'components/YifeiInfo';
import RightPanel from 'components/RightPanel';
import MouseScroll from 'components/MouseScroll';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {Wrapper, Main, Sides, Left, Right} from './styles';
class App extends Component {
  render() {
      return (
      <Wrapper>
        <Main>
          <Sides>
            <Left><YifeiInfo iconColor='white'/> <MouseScroll/></Left>
            <Right><RightPanel/></Right>
          </Sides>
        </Main>
      </Wrapper>
    );
  }
}

export default App;
