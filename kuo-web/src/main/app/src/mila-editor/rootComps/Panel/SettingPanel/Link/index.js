import React, { Component } from 'react';
import { Icon, Input, Tabs, Menu, Select, Radio } from 'antd';
import PanelWrapper from '../../PanelWrapper';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';
import {
  Dropdown,
  Divider,
  RadioButtonGroup,
  TextInput,
} from '../../Component';
import './index.less';

const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;
const Option = Select.Option;

const Types = [
  'Home',
  'Contact',
]

@inject('designPanelUiStore')
@observer
class LinkPanel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      type: 'None',
      page: {},
      email: {},
      phoneNumber: {},
      webAddress: {},
    };
  }

  componentDidMount() {
    const { astm } = this.props;
    this.setState({
      type: astm.spec.link.type,
      page: astm.spec.link.page || {},
      email: astm.spec.link.email || {},
      phoneNumber: astm.spec.link.phoneNumber || {},
      webAddress: astm.spec.link.webAddress || {},
    });
  }

  close() {
    this.props.designPanelUiStore.closeLinkPanel();
  }

  renderNoneLink = () => {
    return (
      <div className="section">
        None..
      </div>
    )
  }

  renderPageLink = () => {
    const pageOptions = [];
    for (let i = 0; i < Types.length; i++) {
      pageOptions.push(<Option key={i} value={Types[i]}>{Types[i]}</Option>);
    }

    return (
      <div className="section">
        <Dropdown label="Which page?"  options={pageOptions} />
        <Divider type="short" />
        <RadioButtonGroup label="How does it open?" >
          <Radio value="NewWindow">New window</Radio>
          <Radio value="CurrentWindow">Current window</Radio>
        </RadioButtonGroup>
      </div>
    )
  }

  renderWebAddressLink = () => {
    return (
      <div className="section">
        <TextInput label="What's the web address(URL)?" value={this.state.webAddress.address || ''} onChange={e => this.setState({webAddress: { ...this.state.webAddress, address: e.target.value }})} />
        <Divider type="short" />
        <RadioButtonGroup label="How does it open?" value={this.state.webAddress.openType} onChange={e => this.setState({webAddress: { ...this.state.webAddress, openType: e.target.value }})}>
          <Radio value="NewWindow">New window</Radio>
          <Radio value="CurrentWindow">Current window</Radio>
        </RadioButtonGroup>
      </div>
    )
  }

  renderEmailLink = () => {
    return (
      <div className="section">
        <TextInput label="What's the email address?" value={this.state.email.address || ''} onChange={e => this.setState({email: { ...this.state.email, address: e.target.value }})}/>
        <Divider type="short" />
        <TextInput label="What's the email's subject?" value={this.state.email.subject || ''} onChange={e => this.setState({email: { ...this.state.email, subject: e.target.value }})}/>
      </div>
    )
  }

  renderPhoneNumberLink = () => {
    return (
      <div className="section">
        <TextInput label="What's your number?" value={this.state.phoneNumber.phoneNum || ''} onChange={e => this.setState({phoneNumber: { ...this.state.phoneNumber, phoneNum: e.target.value }})} />
      </div>
    )
  }

  selectType(e) {
    this.setState({
      type: e.target.value,
    })
  }

  done() {
    const { astm } = this.props;
    
    if (this.state.type === 'WebAddress') {
      astm.spec.link.setWebAddress(this.state.webAddress);
    }

    if (this.state.type === 'Email') {
      astm.spec.link.setEmail(this.state.email);
    }

    if (this.state.type === 'PhoneNumber') {
      astm.spec.link.setPhoneNumber(this.state.phoneNumber);
    }
  }

  render() {
    const radioStyle = {
      display: 'block',
      height: '16px',
      lineHeight: '16px',
      marginBottom: '14px',
    };

    console.log(this.state.type, 'sssa');
    return (
      <PanelWrapper title="What do you want to link to?" width={560} onClose={this.close.bind(this)} onDone={() => this.done() }>
        <div className="link-panel">
          <div className="content">
            <section className="tabs left">
              <div className="tab-header">
                <RadioGroup onChange={e => this.selectType(e)} value={this.state.type}>
                  <Radio style={radioStyle} value="None">None</Radio>
                  <Radio style={radioStyle} value="Page">Page</Radio>
                  <Radio style={radioStyle} value="Archor">Archor</Radio>
                  <Radio style={radioStyle} value="WebAddress">Web Address</Radio>
                  <Radio style={radioStyle} value="Email">Email</Radio>
                  <Radio style={radioStyle} value="PhoneNumber">Phone Number</Radio>
                  <Radio style={radioStyle} value="Document">Document</Radio>
                  <Radio style={radioStyle} value="TopBottom">Top / Bottom of Page</Radio>
                  <Radio style={radioStyle} value="Lightbox">Lightbox</Radio>
                </RadioGroup>
              </div>
              <div className="tab-content">
                { this[`render${this.state.type}Link`]()}            
              </div>
            </section>
          </div>
        </div>
      </PanelWrapper>
    )
  }
}

export default LinkPanel;
