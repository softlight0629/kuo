import React, { Component } from 'react';
import { Modal, Tabs, Breadcrumb } from 'antd';
import ScrollBar from '../../../components/ScrollBar';
import { observer } from 'mobx-react';

@observer
class FreePane extends Component {

  selectCategory(category) {
    this.props.pane.selectCategory(category);
  }

  select(media) {
    this.props.mediaLibraryUiStore.select(media);
  }

  render() {
    const { pane, mediaLibraryUiStore: { selectedMedias } } = this.props;
    const { categories, medias, currentCategory } = pane;
    const selectedIds = selectedMedias.map(selectedMedia => selectedMedia.id);

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
                      <li className={`item ${selectedIds.includes(media.id)?'selected' : ''}`}>
                        <div className="image"
                          style={{ backgroundImage: `url(${media.cover})` }}
                          onClick={() => this.select(media)}
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
