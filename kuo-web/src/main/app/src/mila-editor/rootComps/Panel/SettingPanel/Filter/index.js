import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import * as _ from 'lodash';
import { withRouter } from 'react-router';
import PanelWrapper from '../../PanelWrapper';
import ScrollBar from '../../../../components/ScrollBar';
import svgFilters from '@packages/coreUtils/core/svgFilters/svgFilters';
import svgFiltersDefinition from '@packages/documentServices/media/svgFiltersDefinition';
import svgFiltersTemplates from '../../svgFiltersTemplates';
import UiImage from '@packages/baseUi/controls/image';

const thumbWidth = 72;
const thumbHeight = 72;

@inject('designPanelUiStore')
@observer
class FilterPanel extends Component {

  close() {
    this.props.editorAPI.panels.closePanelByName('panels.compPanels.filter');
  }

  selectEffect(effect) {
    this.props.selectedComponent.spec.fill.setFilterEffect(effect);
  }

  renderThumb(thumb) {
    const { dataQuery, layout } = this.props.selectedComponent;
    
    return (
      <div className="thumbnail-wrapper item-wrapper" onClick={() => this.selectEffect(thumb.value)}>
      <label className="label">
        <div className="control-thumbnail fixed-ratio">
          <div className="illustration-container illustration-bg">
            <div className="illustration-inner-container">
              <UiImage 
                containerStyle={{
                  position: 'relative',
                }}
                imageData={{
                  src: dataQuery.src,
                  width: layout.width,
                  height: layout.height,
                  effectName: thumb.value,
                }}
                imageWidth={thumbWidth}
                imageHeight={thumbHeight}
                style={{
                  width: thumbWidth,
                  height: thumbHeight,
                }}
              />
            </div>
          </div>
          <span className="control-label with-ellipsis label">
            <span className="control-label-base">{thumb.value}</span>
          </span>
        </div>
      </label>
    </div>
    )
  }

  getThumbsOptions() {
    const svgFilterNames = svgFiltersDefinition.getNames();
    const svgFiltersTranslation = svgFiltersTemplates.getFiltersThumbs(svgFilterNames, 'v2');

    return _.map(svgFiltersTranslation, _.bind(thumb => {
      if (!thumb.symbolName) {
        thumb.illustration = this.renderThumb(thumb)
      }
      return thumb;
    }, this))
  }

  render() {
    const thumbsOptions = this.getThumbsOptions();
    return (
      <PanelWrapper title="Choose a Filter" onClose={this.close.bind(this)}>
        <div className="filter-panel">
            <div className="content-wrapper">
              <section className="comp-panel-content">
              <ScrollBar>
                <div className="composite-thumbnails">
                  <div className="composite-thumbnails-list" data-max-items-per-row="3" >
                  {
                    thumbsOptions.map(thumb => thumb.illustration)
                  }
                  </div>
                </div>
                </ScrollBar>
              </section>
            </div>
        </div>
      </PanelWrapper>
    )
  }
}

export default FilterPanel;
