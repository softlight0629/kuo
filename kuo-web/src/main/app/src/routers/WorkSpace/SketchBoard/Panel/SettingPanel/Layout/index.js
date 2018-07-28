import React, { Component } from 'react';
import { Slider, Icon, InputNumber } from 'antd';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';
import PanelWrapper from '../../PanelWrapper';


import './index.less';

@withRouter
@inject('designPanelUiStore', 'astRefUiStore')
@observer
class LayoutPanel extends Component {

  close() {
    this.props.designPanelUiStore.closeLayoutPanel();
  }

  render() {
    const { astm } = this.props.astRefUiStore;
    const { layout } = astm;

    return (
      <PanelWrapper title="Button Layouts" onClose={this.close.bind(this)}>
        <div className="layout-panel">
          <section className="comp-panel-content">
            <div className="composite-thumbnails has-label">
              <label className="label">How's text aligned?</label>
              <div className="composite-thumbnails-list">
                <div className="thumbnail-wrapper">
                  <div className={`control-thumbnail ${layout.align === 'left' ? 'selected' : ''}`} onClick={() => layout.setAlign('left')}>
                    <div className="thumbnail-bg">
                      <Icon type="align-left" />
                    </div>
                  </div>
                </div>
                <div className="thumbnail-wrapper">
                  <div className={`control-thumbnail ${layout.align === 'center' ? 'selected' : ''}`} onClick={() => layout.setAlign('center')}>
                    <div className="thumbnail-bg">
                      <Icon type="align-center" />
                    </div>
                  </div>
                </div>
                <div className="thumbnail-wrapper">
                  <div className={`control-thumbnail ${layout.align === 'right' ? 'selected' : ''}`} onClick={() => layout.setAlign('right')}>
                    <div className="thumbnail-bg">
                      <Icon type="align-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="divider-short" />
            <div className="composite-input-slider has-label">
              <label className="label">Margin</label>
              <div className="composite-input-slider-container">
                <Slider defaultValue={layout.margin} onChange={v => layout.setMargin(v)} />
                <InputNumber
                  min={1}
                  value={layout.margin}
                  onChange={v => layout.setMargin(v)}
                />
              </div>
            </div>
          </section>

  
        </div>
      </PanelWrapper>
    )
  }
}

export default LayoutPanel;
