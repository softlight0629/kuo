import React, { Component } from 'react';

import './index.less';

class AstvPagination extends Component {

  render() {
    return (
      <div className="ast-pagination">
        <nav className="pagination-root">
          <a className="pagination-navbtn navbtn-next"></a>
          <a className="pagination-navbtn navbtn-previous"></a>
          <div className="pagination-strip">
            <div className="pagination-strip-inner">
              <a className="page-button">1</a>
              <a className="page-button">2</a>
              <a className="page-button current-page">3</a>
              <a className="page-button">4</a>
              <a className="page-button">5</a>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default AstvPagination;
