import React, { Component } from 'react';


const CommonItemContainerNotConnected = (ComposedComponent) => {

  class InnerComponent extends Component {

    constructor(props) {
      super(props);

      this.state = {
        isLoved: false,
        loveCount: 0,
      };
    }

    componentDidMount() {}

    componentWillUnmount() {}

    componentWillReceiveProps(nextProps) {
      var photoId = nextProps.photoId;

      this.setState({
        // isLoved: _itemActions.itemActions.isLoved(photoId),
        // loveCount: _itemActions.itemActions.getLoveCount(photoId)
      });
    }

    updateLoveCount() {}

    toggleLove() {}

    render() {
      const photoId = this.props.photoId;
      const { isLoved, loveCount } = this.props;
      return (
        <ComposedComponent 
          {...this.props}
          love={{
            isLoved,
            count: loveCount + (isLoved ? 1 : 0),
            toggleLove: this.toggleLove.bind(this),
          }}
        />
      )
    }
  }

  return InnerComponent;
}

const CommonItemContainer = function CommonItemContainer(ComposedComponent) {
  return CommonItemContainerNotConnected(ComposedComponent);
}

export CommonItemContainer;
