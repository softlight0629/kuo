import React, { Component } from 'react';

class ResBtnGrp extends Component {

  render() {

    return (
      <div className="resbtn-grp">
        <ul className="resbtn-items">
          <li className="resbtn-item">
            <span className="text">Background</span>
          </li>
          <li className="resbtn-item">
            <span className="text">Menu & Pages</span>
          </li>
          <li className="resbtn-item">
            <span className="text">Add</span>
          </li>
          <li className="resbtn-item">
            <span className="text">My Uploads</span>
          </li>
          <li className="resbtn-item">
            <span className="text">Start Blogging</span>
          </li>
        </ul>
      </div>
    )
  }
}

export default ResBtnGrp;
