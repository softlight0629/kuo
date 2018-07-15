import React, { Component } from 'react';
import Menu, { Item as MenuItem, Divider } from 'rc-menu'
import Dropdown from 'rc-dropdown';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';
import cssrender from '../../../../../../helper/cssrender';

import './index.less';
function onSelect({ key }) {
  console.log(`${key} selected`);
}

function onVisibleChange(visible) {
  console.log(visible);
}

const menu = (
  <Menu onSelect={onSelect}>
    <MenuItem disabled>disabled</MenuItem>
    <MenuItem key="1">one</MenuItem>
    <Divider />
    <MenuItem key="2">two</MenuItem>
  </Menu>
);

@withRouter
@observer
class AstvDropdown extends Component {

  render() {
    const { astm } = this.props;
    const { spec, meta } = astm;

    return (
      <div className="ast-dropdown" style={cssrender(spec)}>
        <Dropdown
          trigger={['click']}
          overlay={menu}
          animation="slide-up"
          onVisibleChange={onVisibleChange}
        >
          <button style={{ width: 100 }}>open</button>
        </Dropdown>
      </div>
    )
  }
}

export default AstvDropdown;
