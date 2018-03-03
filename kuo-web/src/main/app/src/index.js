import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();
// const routingStore = new RouterStore();


// const stores = {
//   routing: routingStore,
// };

// const history = syncHistoryWithStore(browserHistory, routingStore);


// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
)
registerServiceWorker();
