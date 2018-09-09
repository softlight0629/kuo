// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'mobx-react';
// import { useStrict } from 'mobx';
// import { AppContainer } from 'react-hot-loader';
// import './packages';
// import { App, stores, renderClientSide } from './mila-editor/mEditor';
// import ContextProvider from './provider/contextProvider';
// import registerServiceWorker from './registerServiceWorker';
// import create from '@packages/editor/editorAPI';
// import RuntimeCtx from '@packages/runtime/runtimeCtx';

// useStrict(true);

// const editorAPI = create(stores);
// stores.editorAPI = editorAPI;

// const runtimeCtx = RuntimeCtx.create(editorAPI);
// stores.runtimeCtx = runtimeCtx;

// ReactDOM.render(
//   <AppContainer>
//     <Provider {...stores}>
//       <ContextProvider editorAPI={editorAPI}>
//         <App />
//       </ContextProvider>
//     </Provider>
//   </AppContainer>,
//   document.getElementById('root')
// )
// registerServiceWorker();

import './mila-entry/viewer';
