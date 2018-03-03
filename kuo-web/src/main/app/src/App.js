import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { inject, observer } from 'mobx-react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginForm';
import Home from './Home';
import Home2 from './Home2';

class App extends Component {

  componentDidMount() {
    // fetch('/getUser')
    //   .then(response => {
    //     response.json()
    //   })
  }

  render() {
    console.log('obser.......')
    return (
      <div className="App">
        <Row type="flex" justify="center">
          <Col span={12}>
            <Route exact path="/" component={LoginForm} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/home2" component={Home2} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
