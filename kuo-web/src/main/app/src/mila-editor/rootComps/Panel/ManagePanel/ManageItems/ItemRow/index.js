import React, { Component } from 'react';
import { Menu, Dropdown, Input, Button } from 'antd';
import { observer } from 'mobx-react';

@observer
class ItemRow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      value: '',
    }
  }

  editLabel = (item) => {
    this.setState({
      editMode: 'label',
      value: item.label,
    })
  }

  editValue = (item) => {
    this.setState({
      editMode: 'value',
      value: item.value,
    })
  }

  duplicate = (item) => {
    const { store } = this.props;
    store.duplicateItem(item);
  }

  delete = (item) => {
    const { store } = this.props;
    store.removeItem(item);
  }


  done = item => {
    if (this.state.editMode === 'label') {
      item.setLabel(this.state.value);
    }

    if (this.state.editMode === 'value') {
      item.setValue(this.state.value);
    }

    this.setState({
      editMode: false,
      value: '',
    });
  }

  handleChange = e => {
    this.setState({
      value: e.target.value,
    })
  }

  onKeyDown(e, item) {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();

      this.done(item);
    }
  }

  renderOptionMenu = (item) => {
    return (
      <div className="dropdown-options-menu">
        <Menu>
          <Menu.Item key="1">
            <div className="option-menu-action" onClick={() => { this.duplicate(item) }}>
              <span className="symbol ">
                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 12.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5H11v3.5a.5.5 0 0 0 .5.5H15v4.5zm-3 3a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5H7v5.5A1.5 1.5 0 0 0 8.5 14H12v1.5zm0-11L14.5 7H12V4.5zM12 3H8.5A1.5 1.5 0 0 0 7 4.5V6H5.5A1.5 1.5 0 0 0 4 7.5v8A1.5 1.5 0 0 0 5.5 17h6a1.5 1.5 0 0 0 1.5-1.5V14h1.5a1.5 1.5 0 0 0 1.5-1.5V7l-4-4z" fill="#2B5672" fillRule="evenodd"></path>
                </svg>
              </span>
              <span>Duplicate</span>
            </div>
          </Menu.Item>
          <Menu.Item key="2">
            <div className="option-menu-action" onClick={() => { this.editLabel(item) }}>
              <span className="symbol ">
                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 4h-2v1h2a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-2v1h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-2 6V8.5A1.5 1.5 0 0 0 12.5 7h-6A1.5 1.5 0 0 0 5 8.5V10h1V8.5a.5.5 0 0 1 .5-.5H9v6H8v1h3v-1h-1V8h2.5a.5.5 0 0 1 .5.5V10h1zM2 15V6a1 1 0 0 1 1-1h2V4H3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v-1H3a1 1 0 0 1-1-1z" fill="#2B5672" fillRule="evenodd"></path>
                </svg>
              </span>
              <span>Edit label</span>
            </div>
          </Menu.Item>
          <Menu.Item key="3">
            <div className="option-menu-action" onClick={() => { this.editValue(item) }}>
              <span className="symbol ">
                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.381 5.305l-1.702-1.704c-.801-.802-2.197-.8-2.996 0l-8.17 8.18L2 18.001l6.211-1.516 8.17-8.18a2.126 2.126 0 0 0 0-3zM3.426 16.573l.828-3.575 2.742 2.745-3.57.83zm4.548-1.214l-1.328-1.33 3.51-3.513-.681-.682-3.51 3.514-1.327-1.329 5.651-5.659 3.336 3.341-5.651 5.658zM15.7 7.623L14.306 9.02 10.97 5.68l1.394-1.397a1.183 1.183 0 0 1 1.634 0L15.7 5.986a1.16 1.16 0 0 1 0 1.637z" fill="#2B5672" fillRule="evenodd"></path>
                </svg>
              </span>
              <span>Edit value</span>
            </div>
          </Menu.Item>
          <Menu.Item key="4">
            <div className="option-menu-action" onClick={() => { this.delete(item) }}>
              <span className="symbol ">
                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5h9v9zM8 3.5c0-.271.24-.5.525-.5h1.867c.301 0 .608.252.608.5V4H8v-.5zm4 .5v-.5c0-.799-.752-1.5-1.608-1.5H8.525C7.684 2 7 2.673 7 3.5V4H3v1h1v9a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3V5h1V4h-4zm-1 9h1V7h-1v6zm-2 0h1V7H9v6zm-2 0h1V7H7v6z" fill="#2B5672" fillRule="evenodd"></path>
                </svg>
              </span>
              <span>Delete</span>
            </div>
          </Menu.Item>
        </Menu>
      </div>
    )
  }

  renderViewMode = item => (
    <div className="view-mode-content">
      <div className="text-container">
        <div className="text-inner-container">
          <span className="has-tooltip">
            <div className="tooltip-on-ellipsis-content">
              <div className="label">{item.label}</div>
            </div>
          </span>
          <span className="has-tooltip">
            <div className="tooltip-on-ellipsis-content">
              <div className="value">{item.value}</div>
            </div>
          </span>
        </div>
      </div>
      <div className="context-menu-container">
        <div className="context-menu">
          <Dropdown overlay={this.renderOptionMenu(item)} trigger={['click']}>
            <div className="dropdown-selected">
              <div className="context-menu-button">
                <svg baseProfile="full" xmlns="http://www.w3.org/2000/svg" height="4" width="12" viewBox="0 0 12 4">
                  <path className="cls-b1" d="M9.999 3.01A1.046 1.046 0 1 1 9.998.917a1.046 1.046 0 0 1 .001 2.093zm-3.998 0A1.046 1.046 0 1 1 6 .917 1.046 1.046 0 0 1 6 3.01zm-4.048-.041A1.055 1.055 0 0 1 .906 1.906c0-.587.469-1.062 1.047-1.062S3 1.319 3 1.906c0 .587-.469 1.063-1.047 1.063z"></path>
                </svg>
              </div>
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  )

  renderEditMode = (item) => {
    const prop = this.state.editMode;
    const value = prop === 'label' ? item.label : item.value;

    return (
      <div className="sbdl-text-edit text-edit-container">
        <span className="has-tooltip">
          <div className="input-container">
            <Input 
              className="input-container"
              value={this.state.value}
              placeholder={`Add ${prop} here`}
              maxLength="400"
              spellCheck="false"
              dir="ltr"
              onKeyDown={(e) => this.onKeyDown(e, item)}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
        </span>
        <Button onClick={() => this.done(item)}>Done</Button>
      </div>
    )
  }

  render() {
    const { item } = this.props;
    const { editMode }= this.state

    return (
      <div className={`sbdl-item-row ${editMode?'edit-mode': ''}`}>
        <div className="sbdl-item-row-base">
          <div className="drag-handle-container">
            <span className="symbol symbol-drag">
              <svg baseProfile="full" height="12" width="8" viewBox="0 0 8 12">
                <path d="M6 11.979v-2h2v2H6zm0-5h2v2H6v-2zm0-3h2v2H6v-2zm0-3h2v2H6v-2zm-3 9h2v2H3v-2zm0-3h2v2H3v-2zm0-3h2v2H3v-2zm0-3h2v2H3v-2zm-3 9h2v2H0v-2zm0-3h2v2H0v-2zm0-3h2v2H0v-2zm0-1.01V.979v-.01h2v2.01H0v-.01z"></path>
              </svg>
            </span>
          </div>
          <div className={`content ${editMode?'': 'has-drag-handle'}`}>
            { !editMode && this.renderViewMode(item) }
            { editMode && this.renderEditMode(item) }
          </div>
        </div>
      </div>
    )
  }
}

export default ItemRow;
