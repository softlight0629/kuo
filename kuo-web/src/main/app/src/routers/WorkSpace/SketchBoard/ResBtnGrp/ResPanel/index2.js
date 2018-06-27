import React, { Component } from 'react';
import { inject } from 'mobx-react';
import ThemeButton from '../../ThemeButton';
import './index.less';

@inject('astThemeUiStore', 'sketchBoardStore', 'resGrpUiStore')
class ResPanel extends Component {

  handleClick(ast) {
    this.props.sketchBoardStore.addAst(ast);
    this.props.resGrpUiStore.closeResPanel();
  }

  handle(kind, theme) {
    const ast = this.props.astThemeUiStore.getTheme(kind, theme);
    console.log(ast);
    this.handleClick(ast);
  }
  
  render() {
    const { sketchBoardStore } = this.props;
    const themesOfButton = this.props.astThemeUiStore.themesOfKind('Button');

    return (
      <div className="res-panel">
        <div className="res-panel-inner">
          <ul className="add-category-list">
            <li className="category">
              <span className="category-name-wrapper">
                <span className="category-name">Database</span>
              </span>
            </li>
            <li className="category">
              <span className="category-name-wrapper">
                <span className="category-name">Text</span>
              </span>
            </li>
            <li className="category">
              <span className="category-name-wrapper">
                <span className="category-name">Image</span>
              </span>
            </li>
            <li className="category">
              <span className="category-name-wrapper">
                <span className="category-name">Button</span>
              </span>
            </li>
          </ul>
          <div className="category-view-wrapper">
            <div className="header">
              <label className="title">Add a Button</label>
              <div className="actions">
                <div className="button help-button">?</div>
                <div className="button close"></div>
              </div>
            </div>
            <div className="category-view">
              <div className="custom-scroll">
                <div className="outer-container">
                  <div className="positioning">
                    <div className="custom-scroller">
                      <div className="custom-scroll-handle">
                        <div className="inner-handle"></div>
                      </div>
                    </div>
                  </div>
                  <div className="inner-container">
            
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default ResPanel;
