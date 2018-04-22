import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.less';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';

@inject('routing')
@observer
class Verticals extends Component {

  render() {
    const { push } = this.props.routing;

    console.log(push, 'push.......');
    return (
      <div className="verticals">
        <section className="verticals-container">
          <div className="text">
            <h1>What kind of website <br/> do you want to create?</h1>
          </div>
          <nav>
            <div className="verticals-list-group">
              <ul>
                <li> 
                  <Link to="/templates">Business</Link>
                </li>
                <li> 
                  <a href="javascript:void(0)" onClick={() => push('/templates')}>Online Store</a>
                </li>
                <li> 
                  <a href="/">Photography</a>
                </li>
                <li> 
                  <a href="/">Music</a>
                </li>
              </ul>
              <ul>
                <li> 
                  <a href="/">Designer</a>
                </li>
                <li> 
                  <a href="/">Restaurants & Food</a>
                </li>
                <li> 
                  <a href="/">Accommodation</a>
                </li>
                <li> 
                  <a href="/">Events</a>
                </li>
              </ul>
              <ul>
                <li> 
                  <a href="/">Blog</a>
                </li>
                <li> 
                  <a href="/">Beauty & Wellness</a>
                </li>
                <li> 
                  <a href="/">Portfolio & CV</a>
                </li>
                <li> 
                  <a href="/">Other</a>
                </li>
              </ul>
            </div>
          </nav>
        </section>
      </div>
    )
  }
}

export default Verticals;
