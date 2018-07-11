import React, { Component } from 'react';
import { Modal, Tabs, Breadcrumb } from 'antd';
import ScrollBar from '../../../../../components/ScrollBar';
import { observer } from 'mobx-react';

@observer
class FreePane extends Component {

  selectCategory(category) {
    this.props.pane.selectCategory(category);
  }

  render() {
    const { pane } = this.props;
    const { categories, medias, currentCategory } = pane;

    return (
      <div className="content-wrapper">
        <div className="sidebar">
            <div className="sidebar-inner">
             <ScrollBar> 
                <div className="folders">
                  <ul className="folder-list">
                    {
                      categories.map(category => (
                        <li className="folder-list-item" onClick={() => this.selectCategory(category)}>
                          <div className="name">
                            <div className="name-inner">{category.title}</div>
                          </div>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </ScrollBar>
            </div>
        </div>
        <div className="entities-wrapper">
          <ScrollBar>
              <div className="entities-grid">
                <Breadcrumb>
                  <Breadcrumb.Item>Images</Breadcrumb.Item>
                  <Breadcrumb.Item>{currentCategory.title}</Breadcrumb.Item>
                </Breadcrumb>
                <ul className="items">
                  {
                    medias.map(media => (
                      <li className="item">
                        <div className="image"
                          style={{ backgroundImage: `url(${media.cover})` }}
                          onClick={() => this.toggle(media)}
                        />
                      </li>
                    ))
                  }
                </ul>
              </div>
          </ScrollBar>
        </div>
      </div>
    )
  }
}

export default FreePane;
