import React from 'react';
import ReactDOM from 'react-dom';
import App from 'views/App';
import PersonalLetter from 'views/PersonalLetter';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {Nav, NavCv, NavLetter} from 'styles/styled-components';

ReactDOM.render((
  <div>
    <Nav>
      <NavCv href='/'>CV</NavCv>
      <NavLetter href='/personalLetter'>Personal letter</NavLetter>
    </Nav>
    <BrowserRouter>
      <div>
        <Route exact path='/' component={App} />
        <Route exact path='/personalLetter' component={PersonalLetter} />
      </div>
    </BrowserRouter>
  </div>
), document.getElementById('root'));


// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
