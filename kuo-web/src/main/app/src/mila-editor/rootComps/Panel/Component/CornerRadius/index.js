import React, { Component } from 'react';
import { Icon, Slider, Tabs, Select, InputNumber } from 'antd';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';

@observer
class CornerRadius extends Component {

  render() {
    const { label, corner } = this.props;

    return (
      <div className="composite-corner-radius-input has-label">
        <label className="label">{label}</label>
        <div className="corner-radius-input">
          <div className="top">
            <div className="control-corner top left">
              <div className="input-container">
                <InputNumber
                  min={0}
                  size="small"
                  value={corner.leftTop}
                  onChange={v => corner.setLeftTop(v)}
                />
              </div>
              <div className="corner-border" style={{ borderTopLeftRadius: 48 }}></div>
            </div>
            <div className="control-corner top right">
              <div className="input-container">
                <InputNumber
                  min={0}
                  size="small"
                  value={corner.rightTop}
                  onChange={v => corner.setRightTop(v)}
                />
              </div>
              <div className="corner-border" style={{ borderTopRightRadius: 48 }} ></div>
            </div>
          </div>
          <div className="control-boolean link" onClick={() => corner.toggleCornerLink()}>
            <Icon type="link" />
          </div>
          <div className="bottom">
            <div className="control-corner bottom left">
              <div className="input-container">
                <InputNumber
                  min={0}
                  size="small"
                  value={corner.leftBottom}
                  onChange={v => corner.setLeftBottom(v)}
                />
              </div>
              <div className="corner-border" style={{ borderBottomLeftRadius: 48 }}></div>
            </div>
            <div className="control-corner bottom right">
              <div className="input-container">
                <InputNumber
                  min={0}
                  size="small"
                  value={corner.rightBottom}
                  onChange={v => corner.setRightBottom(v)}
                />
              </div>
              <div className="corner-border" style={{ borderBottomRightRadius: 48 }}></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CornerRadius;
