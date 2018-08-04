import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './index.less';

const _transform2Col = (galleryMedias) => {
  return [
    {
      width: 204,
      height: 253,
      cover: galleryMedias[0].cover,
    },
    {
      width: 376,
      height: 253,
      cover: galleryMedias[1].cover,
    },
  ]
}

const _transform2Colv2 = (galleryMedias) => {
  return [
    {
      width: 286,
      height: 279,
      cover: galleryMedias[0].cover,
    },
    {
      width: 294,
      height: 279,
      cover: galleryMedias[1].cover,
    },
  ]
}

const _transformCol = (galleryMedia) => {
  return [
    {
      width: 580,
      height: 390,
      cover: galleryMedia[0].cover,
    },
  ]
}

const _transform = (galleryMedias) => {
  let idx = 0;
  let transformed = [];
  while (idx < galleryMedias.length) {
    let rdm = Math.floor(Math.random() * 10) % 3;
    if (idx + 2 > galleryMedias.length) {
      rdm = 1;
    }
    switch (rdm) {
      case 0:
        transformed = transformed.concat(_transform2Col(galleryMedias.slice(idx, idx + 2)));
        idx += 2;
        break;
      case 1:
        transformed = transformed.concat(_transformCol(galleryMedias.slice(idx, idx + 1)));
        idx += 1;
        break;
      case 2:
        transformed = transformed.concat(_transform2Colv2(galleryMedias.slice(idx, idx + 2)));
        idx += 2;
    }
  }

  return transformed;
}


@observer
class MasonryGalleryLayout extends Component {

  render() {
    const { galleryMedias } = this.props.astm.store;
    const transformed = _transform(galleryMedias);

    console.log(transformed, 'satransss');
    return (
      <div className="masonry-layout">
        <div className="gallery-container" style={{ height: '100%', width: 580 }}>
          <div className="gallery-column">
            {
              transformed.map(t => (
                <div className="gallery-group gallery-group-visible" style={{ width: t.width, height: t.height }}>
                  <div className="gallery-item-container visible"
                    style={{ width: t.width - 10, margin: 5, top: 0, left: 0, borderRadius: 0 }}
                  >
                    <div className="gallery-item-wrapper"
                      style={{ height: t.height - 10, borderRadius: 0 }}
                    >
                      <div className="gallery-item-visible gallery-item">
                        <img
                          className="gallery-item gallery-item-visible"
                          src={t.cover}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default MasonryGalleryLayout;
