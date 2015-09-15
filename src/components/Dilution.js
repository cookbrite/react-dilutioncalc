import React from 'react';

export default class Dilution extends React.Component {
  dilutionClickHandler() {
    this.props.updateDil(this.props.part1, this.props.part2);
  }
  render() {
    return (
      <button type="button" className='btn btn-default' onClick={this.dilutionClickHandler.bind(this)}>
        {this.props.name}
      </button>
    )
  }
}