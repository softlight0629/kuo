import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';
import { Menu, Dropdown } from 'antd';
import PanelWrapper from '../../PanelWrapper';
import SortDragList from '../../../../../../components/SortDragList';
import ScrollBar from '../../../../../../components/ScrollBar';
import ItemRow from './ItemRow';
import './index.less';

@withRouter
@observer
class ManageItemsPanel extends Component {

  close() { }

  dragItemRender = (item, index) => {
    const { store } = this.props.astm;
    return <ItemRow item={item} store={store} />
  }

  dragListStyle = () => ({})

  dragItemStyle = (snapshot, draggableStyle) => ({
    userSelect: 'none',
    background: snapshot.isDragging ? 'lightgreen' : 'grey',

    ...draggableStyle,
  })

  onResort = (sourceIdx, destIdx) => {
    const { store } = this.props.astm;
    store.reorderItems(sourceIdx, destIdx)
  }

  render() {
    const { store } = this.props.astm;
    const { items } = store;

    return (
      <PanelWrapper title="Manage Dropdown List" onClose={this.close.bind(this)}>
        <section className="dropdown-list-panel sort-drag-panel">
          <ScrollBar>
            <div className="sort-by-drag-list">
              <div style={{ position: 'relative' }}>
                <SortDragList
                  count={items.length}
                  items={items}
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
              <button className="main-button" onClick={() => { store.addItem() }}>
                <div className="button-content">
                  <svg width="9" height="9" viewBox="0 0 9 9" className="symbol symbol-plus">
                    <path fill="#3799EB" d="M4 0h1v9H4z"></path>
                    <path fill="#3799EB" d="M0 4h9v1H0z"></path>
                  </svg>
                  <span className="button-label">Add a List Item</span>
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
