import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AuthStore from './stores/auth_store';
import SiteStore from './stores/site_store';

const authStore = new AuthStore();
const siteStore = new SiteStore();

const stores = {
  authStore,
  siteStore,
}

ReactDOM.render(
  <Provider {...stores}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
