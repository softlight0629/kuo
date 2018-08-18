import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { useStrict } from 'mobx';
import { AppContainer } from 'react-hot-loader';
import './packages';
import { App, stores } from './mila-editor/mEditor';
import registerServiceWorker from './registerServiceWorker';

useStrict(true);

ReactDOM.render(
  <AppContainer>
    <Provider {...stores}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById('root')
)
registerServiceWorker();
