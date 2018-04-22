import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'mobx-react';
import { useStrict } from 'mobx';
import { AppContainer } from 'react-hot-loader';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import {Router } from 'react-router';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import stores from './stores';

import './index.css';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const history = syncHistoryWithStore(browserHistory, routingStore);
useStrict(true);

ReactDOM.render(
  <AppContainer>
    <Provider routing={routingStore} {...stores}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </AppContainer>,
  document.getElementById('root')
)
registerServiceWorker();
