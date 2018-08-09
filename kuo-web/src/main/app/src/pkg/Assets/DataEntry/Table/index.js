import React, { Component } from 'react';

import './index.less';

class AstvTable extends Component {

  render() {
    return (
      <div className="ast-table">
        <div className="tb-root">
          <div className="tb-header">
            <div className="tb-header-viewport">
              <div className="tb-header-container">
                <div className="tb-header-row">
                  <div className="tb-header-cell" style={{ width: 270, left: 0 }}>
                    <div className="tb-header-cell-label">
                      <div className="tb-header-cell-text">2016 Tour Dates</div>
                    </div>
                  </div>
                  <div className="tb-header-cell" style={{ width: 270, left: 270 }}>
                    <div className="tb-header-cell-label">
                      <div className="tb-header-cell-text">Location</div>
                    </div>
                  </div>
                  <div className="tb-header-cell" style={{ width: 270, left: 540 }}>
                    <div className="tb-header-cell-label">
                      <div className="tb-header-cell-text">Tickets</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tb-body">
            <div className="tb-body-viewport-wrapper">
              <div className="tb-body-viewport">
                <div className="tb-body-container">
                  <div className="tb-row" style={{ top: 0 }}>
                    <div className="tb-cell" style={{ width: 270, left: 0 }}>
                      <div className="tb-cell-content-wrapper">
                        <div className="tb-cell-text-wrapper">
                          <div className="tb-cell-text">Fri, June 20</div>
                        </div>
                      </div>
                    </div>
                    <div className="tb-cell" style={{ width: 270, left: 270 }}>
                      <div className="tb-cell-content-wrapper">
                        <div className="tb-cell-text-wrapper">
                          <div className="tb-cell-text">The Academy, L.A</div>
                        </div>
                      </div>
                    </div>
                    <div className="tb-cell" style={{ width: 270, left: 540 }}>
                      <div className="tb-cell-content-wrapper">
                        <div className="tb-cell-text-wrapper">
                          <div className="tb-cell-text">Book It</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tb-row" style={{ top: 45 }}>
                    <div className="tb-cell" style={{ width: 270, left: 0 }}>
                      <div className="tb-cell-content-wrapper">
                        <div className="tb-cell-text-wrapper">
                          <div className="tb-cell-text">Fri, June 20</div>
                        </div>
                      </div>
                    </div>
                    <div className="tb-cell" style={{ width: 270, left: 270 }}>
                      <div className="tb-cell-content-wrapper">
                        <div className="tb-cell-text-wrapper">
                          <div className="tb-cell-text">The Academy, L.A</div>
                        </div>
                      </div>
                    </div>
                    <div className="tb-cell" style={{ width: 270, left: 540 }}>
                      <div className="tb-cell-content-wrapper">
                        <div className="tb-cell-text-wrapper">
                          <div className="tb-cell-text">Book It</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tb-row" style={{ top: 90 }}>
                    <div className="tb-cell" style={{ width: 270, left: 0 }}>
                      <div className="tb-cell-content-wrapper">
                        <div className="tb-cell-text-wrapper">
                          <div className="tb-cell-text">Fri, June 20</div>
                        </div>
                      </div>
                    </div>
                    <div className="tb-cell" style={{ width: 270, left: 270 }}>
                      <div className="tb-cell-content-wrapper">
                        <div className="tb-cell-text-wrapper">
                          <div className="tb-cell-text">The Academy, L.A</div>
                        </div>
                      </div>
                    </div>
                    <div className="tb-cell" style={{ width: 270, left: 540 }}>
                      <div className="tb-cell-content-wrapper">
                        <div className="tb-cell-text-wrapper">
                          <div className="tb-cell-text">Book It</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tb-footer"></div>
        </div>
      </div>
    )
  }
}

export default AstvTable;
