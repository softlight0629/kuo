import React, { Component } from 'react';
import PanelWrapper from '../../PanelWrapper';
import SortDragList from '../../../../../../components/SortDragList';
import ScrollBar from '../../../../../../components/ScrollBar';
import arrr from '../../../../../../utility/array';
import './index.less';

const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`,
  }));

class ManageItemsPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: getItems(10),
    };
  }

  close() { }

  dragItemRender = (item, index) => (
    <div className="sbdl-item-row">
      <div className="sbdl-item-row-base">
        <div className="drag-handle-container">
          <span className="symbol symbol-drag">
            <svg baseProfile="full" height="12" width="8" viewBox="0 0 8 12">
              <path d="M6 11.979v-2h2v2H6zm0-5h2v2H6v-2zm0-3h2v2H6v-2zm0-3h2v2H6v-2zm-3 9h2v2H3v-2zm0-3h2v2H3v-2zm0-3h2v2H3v-2zm0-3h2v2H3v-2zm-3 9h2v2H0v-2zm0-3h2v2H0v-2zm0-3h2v2H0v-2zm0-1.01V.979v-.01h2v2.01H0v-.01z"></path>
            </svg>
          </span>
        </div>
        <div className="content">
          <div className="view-mode-content">
            <div className="text-container">
              <div className="text-inner-container">
                <span className="has-tooltip">
                  <div className="tooltip-on-ellipsis-content">
                    <div className="label">Maybe, we'll see{item.id}</div>
                  </div>
                </span>
                <span className="has-tooltip">
                  <div className="tooltip-on-ellipsis-content">
                    <div className="value">Value: Radio button3</div>
                  </div>
                </span>
              </div>
            </div>
            <div className="context-menu-container">
              <div className="context-menu">
                <div className="dropdown-selected">
                  <div className="context-menu-button">
                    <svg baseProfile="full" xmlns="http://www.w3.org/2000/svg" height="4" width="12" viewBox="0 0 12 4">
                      <path className="cls-b1" d="M9.999 3.01A1.046 1.046 0 1 1 9.998.917a1.046 1.046 0 0 1 .001 2.093zm-3.998 0A1.046 1.046 0 1 1 6 .917 1.046 1.046 0 0 1 6 3.01zm-4.048-.041A1.055 1.055 0 0 1 .906 1.906c0-.587.469-1.062 1.047-1.062S3 1.319 3 1.906c0 .587-.469 1.063-1.047 1.063z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  dragListStyle = () => ({})

  dragItemStyle = (snapshot, draggableStyle) => ({
    userSelect: 'none',
    background: snapshot.isDragging ? 'lightgreen' : 'grey',

    ...draggableStyle,
  })

  onResort = (sourceIndex, destIndex) => {
    const items = arrr.reorder(
      this.state.items,
      sourceIndex,
      destIndex,
    );

    this.setState({
      items,
    });
  }

  render() {
    return (
      <PanelWrapper title="Manage Dropdown List" onClose={this.close.bind(this)}>
        <section className="dropdown-items-panel sort-drag-panel">
          <ScrollBar>
            <div className="sort-by-drag-list">
              <div style={{ position: 'relative' }}>
                <SortDragList
                  items={this.state.items}
                  dragItemRender={this.dragItemRender.bind(this)}
                  dragListStyle={this.dragListStyle.bind(this)}
                  dragItemStyle={this.dragItemStyle.bind(this)}
                  onResort={this.onResort.bind(this)}
                />
              </div>
            </div>
          </ScrollBar>
          <div className="actions">
            <div>
              <button className="main-button">
                <div className="button-content">
                  <svg width="9" height="9" viewBox="0 0 9 9" className="symbol symbol-plus">
                    <path fill="#3799EB" d="M4 0h1v9H4z"></path>
                    <path fill="#3799EB" d="M0 4h9v1H0z"></path>
                  </svg>
                  <span className="button-label">Add a Button</span>
                </div>
              </button>
            </div>
            <a className="action-item">Go to Settings</a>
          </div>
        </section>
      </PanelWrapper>
    )
  }
}

export default ManageItemsPanel;
