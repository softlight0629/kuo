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
class ManageButtonsPanel extends Component {

  close() { }

  dragItemRender = (radioBtn, index) => {
    const { store } = this.props.astm;
    return <ItemRow radioBtn={radioBtn} store={store} />
  }

  dragListStyle = () => ({})

  dragItemStyle = (snapshot, draggableStyle) => ({
    userSelect: 'none',
    background: snapshot.isDragging ? 'lightgreen' : 'grey',

    ...draggableStyle,
  })

  onResort = (sourceIdx, destIdx) => {
    const { store } = this.props.astm;
    store.reorderRadioBtns(sourceIdx, destIdx)
  }

  render() {
    const { store } = this.props.astm;
    const { radioBtns } = store;

    return (
      <PanelWrapper title="Manage Radio Buttons" onClose={this.close.bind(this)}>
        <section className="radio-buttons-panel sort-drag-panel">
          <ScrollBar>
            <div className="sort-by-drag-list">
              <div style={{ position: 'relative' }}>
                <SortDragList
                  count={radioBtns.length}
                  items={radioBtns.slice()}
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
              <button className="main-button" onClick={() => { store.addRadioBtn() }}>
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

export default ManageButtonsPanel;
