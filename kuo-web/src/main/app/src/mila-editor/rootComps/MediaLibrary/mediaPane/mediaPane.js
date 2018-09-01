import React, { Component } from 'react';
import { Modal, Tabs, Breadcrumb } from 'antd';
import ScrollBar from '../../../components/ScrollBar';
import { observer } from 'mobx-react';

@observer
class MediaPane extends Component {

  selectCategory(category) {
  }

  toggle(media) {
    const editorAPI = this.props.editorAPI;
    editorAPI.mediaGallery.toggleSelectedMedia(media);
  }

  render() {
    const editorAPI = this.props.editorAPI;
    const selectedMediaIds = editorAPI.mediaGallery.getSelectedMediaIds();

    const { categoryFolders, medias, selectedMedias } = this.props;
    
    return (
      <div className="content-wrapper">
        <div className="sidebar">
            <div className="sidebar-inner">
             <ScrollBar> 
                <div className="folders">
                  <ul className="folder-list">
                    {
                      categoryFolders.map(category => (
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
                  {/* <Breadcrumb.Item>{currentCategory.title}</Breadcrumb.Item> */}
                </Breadcrumb>
                <ul className="items">
                  {
                    medias.map(media => (
                      <li className={`item ${selectedMediaIds.includes(media.id)?'selected' : ''}`}>
                        <div className="image"
                          style={{ backgroundImage: `url(${media.fileUrl})` }}
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

export default MediaPane;
