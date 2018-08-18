import React, { Component } from 'react';
import EditorView from './rootComps/editor';

import './app.less';

class App extends Component {

  render() {
    return (
      <div className="editor" style={{ width: '100%', height: '100vh' }}>
        <EditorView />
      </div>
    )
  }
}

export default App;
