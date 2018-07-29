import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Select } from 'antd';
import PanelWrapper from '../../PanelWrapper';
import ScrollBar from '../../../../../../components/ScrollBar';
import {
  RadioImageButtonGroup,
  SectionDivider,
  Divider,
  Dropdown,
  InputSlider,
  ToggleSwitch,
} from '../../Component';
import './index.less';

const Option = Select.Option;


const RadioImageButton = RadioImageButtonGroup.RadioImageButton;
const radioImageOptionsOfLayout = [
  {
    label: 'Collage',
    value: 'Collage',
    imageSrc: 'https://static.parastorage.com/services/pro-gallery-statics/2.561.0/assets/images/settings/layouts/collage-reg.svg',
  },
  {
    label: 'Masonry',
    value: 'Masonry',
    imageSrc: 'https://static.parastorage.com/services/pro-gallery-statics/2.561.0/assets/images/settings/layouts/masonary-reg.svg',
  },
  {
    label: 'Grid',
    value: 'Grid',
    imageSrc: 'https://static.parastorage.com/services/pro-gallery-statics/2.561.0/assets/images/settings/layouts/grid-reg.svg',
  },
  {
    label: 'Thumbnails',
    value: 'Thumbnails',
    imageSrc: 'https://static.parastorage.com/services/pro-gallery-statics/2.561.0/assets/images/settings/layouts/thumbnails-reg.svg',
  },
  {
    label: 'Slider',
    value: 'Slider',
    imageSrc: 'https://static.parastorage.com/services/pro-gallery-statics/2.561.0/assets/images/settings/layouts/slider-reg.svg',
  },
  {
    label: 'Slider Show',
    value: 'SliderShow',
    imageSrc: 'https://static.parastorage.com/services/pro-gallery-statics/2.561.0/assets/images/settings/layouts/slideshow-reg.svg',
  },
  {
    label: 'Strip',
    value: 'Strip',
    imageSrc: 'https://static.parastorage.com/services/pro-gallery-statics/2.561.0/assets/images/settings/layouts/panorama-reg.svg',
  },
  {
    label: 'Column',
    value: 'Column',
    imageSrc: 'https://static.parastorage.com/services/pro-gallery-statics/2.561.0/assets/images/settings/layouts/columns-reg.svg',
  },
  {
    label: 'Magic',
    value: 'Magic',
    imageSrc: 'https://static.parastorage.com/services/pro-gallery-statics/2.561.0/assets/images/settings/layouts/magic-reg.svg',
  },
];
const radioImageOptionsOfThumnail = [
  {
    value: 'bottom',
    imageSrc: 'https://static.parastorage.com/services/pro-gallery-statics/2.561.0/assets/images/settings/thmb-align/thmb-bottom-reg.svg',
  },
  {
    value: 'left',
    imageSrc: 'https://static.parastorage.com/services/pro-gallery-statics/2.561.0/assets/images/settings/thmb-align/thmb-left-reg.svg',
  },
  {
    value: 'top',
    imageSrc: 'https://static.parastorage.com/services/pro-gallery-statics/2.561.0/assets/images/settings/thmb-align/thmb-top-reg.svg',
  },
  {
    value: 'right',
    imageSrc: 'https://static.parastorage.com/services/pro-gallery-statics/2.561.0/assets/images/settings/thmb-align/thmb-right-reg.svg',
  },
]
const optionsOfItemClickAction = [
  {
    label: 'Open in Expand',
    value: 'Expand',
  },
  {
    label: 'A link opens',
    value: 'Link',
  },
  {
    label: 'Nothing happend',
    value: 'None',
  },
].map((option, index) => <Option key={index} value={option.value}>{option.label}</Option>);
const optionsOfPlayVideos = [
  {
    label: 'On hover',
    value: 'OnHover',
  },
  {
    label: 'Autoplay',
    value: 'Autoplay',
  },
  {
    label: 'On click',
    value: 'OnClick',
  },
].map((option, index) => <Option key={index} value={option.value}>{option.label}</Option>);
const optionsOfPlaybackSpeed = [
  {
    label: '.25x',
    value: '.25x',
  },
  {
    label: '.50x',
    value: '.50x',
  },
  {
    label: 'Normal',
    value: 'Normal',
  },
  {
    label: '1.25x',
    value: '1.25x',
  },
  {
    label: '1.50x',
    value: '1.50x',
  },
  {
    label: '2.00x',
    value: '2.00x',
  },
].map((option, index) => <Option key={index} value={option.value}>{option.label}</Option>);

@observer
class GallerySettingsPanel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tab: 'Layout',
    }
  } 

  close() {
  }

  handleLayoutChange(v) {
    const { opts } = this.props.astm;
    opts.setGalleryLayout(v);
  }

  handleThumbnailPlacementChange(v) {
    const { opts } = this.props.astm;
    opts.setThumbnailPlacement(v);
  }

  handleThumbnailSpacingChange(v) {
    const { opts } = this.props.astm;
    opts.setThumbnailSpacing(v);
  }

  handleItemClickActionChange(v) {
    const { opts } = this.props.astm;
    opts.setItemClickAction(v);
  }

  handleSocialSharingChange(v) {
    const { opts } = this.props.astm;
    opts.setEnableSocialSharing(v)
  }

  renderLayout() {
    const { opts } = this.props.astm;

    return (
      <div className="tab-content">
        <RadioImageButtonGroup 
          title="Layouts" 
          value={opts.galleryLayout} 
          options={radioImageOptionsOfLayout} 
          onChange={this.handleLayoutChange.bind(this)} 
        />
        <Divider type="long" />
        <SectionDivider content="Image Display" />
        <Divider type="long" />
        <RadioImageButtonGroup 
          title="Thumbnail Placement"
          value={opts.thumbnailPlacement}
          maxPerRow={4} 
          options={radioImageOptionsOfThumnail} 
          onChange={this.handleThumbnailPlacementChange.bind(this)} 
        />
        <Divider type="long" />
        <SectionDivider content="How Should it Look?" />
        <Divider type="long" />
        <InputSlider label="Thumbnail Spacing" value={opts.thumbnailSpacing} onChange={this.handleThumbnailSpacingChange.bind(this)} />
      </div>
    )
  }

  renderDesign() {
    return (
      <div className="tab-content">
      </div>
    )
  }

  renderAdvanced() {
    const { opts } = this.props.astm;

    return (
      <div className="tab-content">
        <SectionDivider content="Image Settings" />
        <Divider type="long" />
        <InputSlider label="Image Quality" value={opts.imageQuality} onChange={v => opts.setImageQuality(v)}/>
        <Divider type="long" />
        <ToggleSwitch label="Image Sharpening" checked={opts.enableImageSharpening} onChange={v => opts.setEnableImageSharpening(v)}/>
        <Divider type="long" />
        <SectionDivider content="Video Settings" />
        <Divider type="long" />
        <Dropdown label="Play Videos" value={opts.playVideoWhen} options={optionsOfPlayVideos} onChange={v => opts.setPlayVideoWhen(v)}/>
        <Divider type="long" />
        <Dropdown label="Playback Speed" value={opts.playbackSpeed} options={optionsOfPlaybackSpeed} onChange={v => opts.setPlaybackSpeed(v)} />
        <Divider type="long" />
        <ToggleSwitch label="Loop Videos" checked={opts.enableLoopVideos} onChange={v => opts.setEnableLoopVideos(v)} />
      </div>
    )
  }

  renderSettings() {
    const { opts } = this.props.astm;

    return (
      <div className="tab-content">
        <SectionDivider content="Gallery Settings" />
        <Divider type="long" />
        <Dropdown label="When click on a item:" value={opts.itemClickAction} options={optionsOfItemClickAction} onChange={this.handleItemClickActionChange.bind(this)}/>
        <Divider type="long" />
        <SectionDivider content="Social Settings" />
        <Divider type="long" />
        <ToggleSwitch label="Social Sharing" checked={opts.enableSocialSharing} onChange={this.handleSocialSharingChange.bind(this)}/>
      </div>
    )
  }

  render() {
    return (
      <PanelWrapper title="Gallery Settings" width={404} onClose={this.close.bind(this)}>
        <div className="gallery">
          <div className="tabs">
            <div className="tabs-menu">
              <div>
                <span className="tab-wrapper" onClick={() => this.setState({ tab: 'Layout'})}>
                  <div className={`tab-label ${this.state.tab === 'Layout' ? 'active' : ''}`}>
                    <div className="label-text">Layout</div>
                  </div>
                </span>
              </div>
              <div>
                <span className="tab-wrapper" onClick={() => this.setState({ tab: 'Settings'})}>
                  <div className={`tab-label ${this.state.tab === 'Settings' ? 'active' : ''}`}>
                    <div className="label-text">Settings</div>
                  </div>
                </span>
              </div>
              <div>
                <span className="tab-wrapper" onClick={() => this.setState({ tab: 'Design'})}>
                  <div className={`tab-label ${this.state.tab === 'Design' ? 'active' : ''}`}>
                    <div className="label-text">Design</div>
                  </div>
                </span>
              </div>
              <div>
                <span className="tab-wrapper" onClick={() => this.setState({ tab: 'Advanced'})}>
                  <div className={`tab-label ${this.state.tab === 'Advanced' ? 'active' : ''}`}>
                    <div className="label-text">Advanced</div>
                  </div>
                </span>
              </div>
            </div>
            <div className="settings-panel">
              <ScrollBar>
                <div className="content-wrapper">
                  { this[`render${this.state.tab}`]() }
                </div>
              </ScrollBar>
            </div>
          </div>
        </div>
      </PanelWrapper>
    )
  }
}

export default GallerySettingsPanel;
