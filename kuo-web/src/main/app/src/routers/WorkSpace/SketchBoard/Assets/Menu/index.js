import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './index.less';

@observer
class AstvMenu extends Component {

  render() {
    const { astm } = this.props;
    const { rect, menuItems } = astm;
    const { width, height } = rect;
    const menuItemWidth = width / menuItems.length;

    return (
      <nav className="ast-menu">
        <ul className="ast-menu-items">
          {
            menuItems.map((menuItem, i) =>
              <li className="ast-menu-btn" style={{ width: `${menuItemWidth}px`, height: `${height - 6 }px`}} data-postion={`${i === 0 ? 'left' : i === menuItems.length - 1 ? 'right' : 'center'}`}>
                <a className="ast-menu-btn-link">
                  <div className="ast-menu-btn-gapper">
                    <div className="ast-menu-btn-bg">
                      <p className="ast-menu-btn-label" style={{ lineHeight: `${height - 6}px`}}>{menuItem.text}</p>
                    </div>
                  </div>
                </a>
              </li>
            )
          }
        </ul>
      </nav>
    )
  }
}

export default AstvMenu;
