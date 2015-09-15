import React from 'react';

export default class Bottle extends React.Component {
  bottleClickHandler() {
    this.props.updateBottle(this.props.size);
  }
  render() {
    return (
      <button type="button" className='btn btn-default' onClick={this.bottleClickHandler.bind(this)}>
        {this.props.name}
      </button>
    )
  }
}
