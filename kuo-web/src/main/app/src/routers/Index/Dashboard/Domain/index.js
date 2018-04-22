import React, { Component } from 'react';

class Domain extends Component {

  render() {
    const { match } = this.props;

    return (
      <div>
        domain
        {match.params.domain}
      </div>
    )
  }
}

export default Domain;
