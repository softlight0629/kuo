import React, { Component } from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import './Verticals.css';


const { Content } = Layout;

class Verticals extends React.Component {

  render() {
    return (
        <Content className="verticals-container">
          <div className="text">
            <h1>
              What kind of website
              <br/>
              do you want to create?
            </h1>
          </div>
          <nav>
            <div className="verticals-list-group">
              <ul>
                <li>
                  <Link to="/templates"> Business > </Link>
                </li>
                <li>
                  Designer >
                </li>
                <li>
                  Blog >
                </li>
                <li>
                  Online Store >
                </li>
              </ul>
              <ul>
                <li>
                  Restaurants & Food >
                </li>
                <li>
                  Beauty & Wellness >
                </li>
                <li>
                  Photography >
                </li>
                <li>
                  Accommodation >
                </li>
              </ul>
              <ul>
                <li>
                  Portfolio >
                </li>
                <li>
                  Music >
                </li>
                <li>
                  Events >
                </li>
                <li>
                  Other >
                </li>
              </ul>
            </div>
          </nav>
        </Content>
    )
  }
}

export default Verticals;
