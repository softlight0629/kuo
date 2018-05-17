import React, { Component } from 'react';
import Rnd from 'react-rnd';
import { Icon } from 'antd';
import './index.less';
import { observer, inject } from 'mobx-react';

@inject('compToolBarUiStore', 'astmRefUiStore')
@observer
class CompToolBar extends Component {

  render() {
    const { x, y } = this.props.compToolBarUiStore;
    const { astm } = this.props.astmRefUiStore;

    console.log(astm);

    if (!astm) {
      return (<div />)
    } 

    return (
      <Rnd
        position={{ x: x, y: y }}
        dragHandleClassName=".header"
        onDragStop={(e, d) => { this.props.compToolBarUiStore.position(d.x, d.y) }}
      >
        <div className="comp-toolbar">
          <div className="header"></div>
          <div className="header-seperator"></div>
          <div className="inner button-grid">
            <span className="button">
              <Icon type="copy" />
            </span>
            <span className="button">
              <Icon type="paste" />
            </span>
            <span className="button">
              <Icon type="duplicate" />
            </span>
            <span className="button">
              <Icon type="delete" />
            </span>
          </div>
          <div className="seperator"></div>
          <div className="inner button-grid">
            <span className="button">
              <Icon type="move-forward" />
            </span>
            <span className="button">
              <Icon type="align-right" />
            </span>
            <span className="button">
              <Icon type="distribute-horizontal" />
            </span>
            <span className="button">
              <Icon type="distribute-vertical" />
            </span>
          </div>
          <div className="seperator"></div>
          <div className="inner form">
            <label className="row">
              <span className="label">W:</span>
              <div className="input-stepper">
                <input type="text" className="input" value={astm.rect.width}/>
              </div>
            </label>
            <label className="row">
              <span className="label">H:</span>
              <div className="input-stepper">
                <input type="text" className="input" value={astm.rect.height}/>
              </div>
            </label>
          </div>
          <div className="seperator"></div>
          <div className="inner form">
            <label className="row">
              <span className="label">X:</span>
              <div className="input-stepper">
                <input type="text" className="input" value={astm.rect.x}/>
              </div>
            </label>
            <label className="row">
              <span className="label">Y:</span>
              <div className="input-stepper">
                <input type="text" className="input" value={astm.rect.y}/>
              </div>
            </label>
          </div>
        </div>
      </Rnd>
    )
  }
}

export default CompToolBar;
