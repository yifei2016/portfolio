import React from 'react';
import {Route} from 'mobx-router';
import {scrollBodyToTop} from 'utils/dom-utils';

//components
import App from 'views/App';
import PersonalLetter from 'views/PersonalLetter';

const paths = {
  app: new Route({
    id: 'app',
    component: <App/>,
    path: '/'
  }),
  personalLetter: new Route({
    id: 'personalLetter',
    component: <PersonalLetter/>,
    path: '/personalLetter'
  })
};

export default paths;
