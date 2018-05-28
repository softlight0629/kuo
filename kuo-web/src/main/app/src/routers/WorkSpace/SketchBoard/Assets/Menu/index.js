import React, { Component } from 'react';
import { observer } from 'mobx-react';
import cssrender from '../../../../../helper/cssrender';
import './index.less';

@observer
class AstvMenu extends Component {

  render() {
    const { astm } = this.props;
    const { spec, store } = astm;
    const { rect, fill, shadow, border, font, layout, corner, gap = 5 } = spec;
    const { menuItems } = store;
    const { width, height } = rect;
    const menuItemWidth = (width - (gap ? 30 : 0 )) / menuItems.length;

    return (
      <nav className="ast-menu">
        <ul className="ast-menu-items" style={cssrender(gap ? {} : {shadow, corner, border})}>
          {
            menuItems.map((menuItem, i) =>
              <li className={`ast-menu-btn ${gap ? 'gap' : ''}`}
                style={{
                  width: `${menuItemWidth}px`,
                  height: `${height}px`,
                ...(cssrender(gap ? {shadow, layout, border, fill, corner} : { fill, layout }))}} 
                data-postion={`${i === 0 ? 'left' : i === menuItems.length - 1 ? 'right' : 'center'}`}>
                <a className="ast-menu-btn-link" style={cssrender({font})}>
                  <div className="ast-menu-btn-gapper">
                    <div className="ast-menu-btn-bg">
                      <p className="ast-menu-btn-label" style={{ lineHeight: `${height}px`}}>{menuItem.text}</p>
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
