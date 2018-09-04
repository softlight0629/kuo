import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ctx from '@packages/runtime/runtimeCtx';
import compRegistrar from '@packages/compUtils/compRegistrar';
import compClassFactory from '@packages/compUtils/compClassFactory';

import './stripColumnsContainer.less';

@observer
class StripColumnsContainer extends Component {

  componentDidMount() {
    // const scrollBarWidth = this.props.getScrollbarWidth();
    // const screenWidth = this.props.getScreentWidth();
  }

  getDesktopRelativeProps() {
    // const { siteWidth, childrenData, children, style } = this.props;
    // const { fullWidth, frameMargin, columnMargin, siteMargin, rowMargin } = this.props.compProps;
  }

  render() {
    const { compRef } = this.props;
    return (
      <div className="strc1" data-responsive="true" >
        <div className="strc1-balata">
          <div className="strc1-inline-content">
            {
              compRef.components.map(compRef => {
                return compClassFactory.createChildComponent(compRef);
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

compRegistrar.register('mila.components.view.StripColumnsContainer', StripColumnsContainer);

export default StripColumnsContainer;
