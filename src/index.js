import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import {MobxRouter, RouterStore, startRouter} from 'mobx-router';
import views from 'config/views';

import registerServiceWorker from './registerServiceWorker';


const store = {
	app: {
		title: 'MobX Router Example App',
		user: null
	},
	//here's how we can plug the routerStore into our store
	router: new RouterStore()
};

startRouter(views, store);

ReactDOM.render(
  <Provider store={store}>
  	<MobxRouter/>
  </Provider>, document.getElementById('root')
)
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
