import React from 'react';
import Bottle from './Bottle';
import Dilution from './Dilution';
import { Bottles, Dilutions } from './Data';
import calculateDilution from './Calculate';
let calc = 0;

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.updateDilution = this.updateDilution.bind(this);
    this.updateBottle = this.updateBottle.bind(this);
    this.updateDilInput = this.updateDilInput.bind(this);
    this.updateBottleInput = this.updateBottleInput.bind(this);

    this.state = {
      dilution1: 0,
      dilution2: 0,
      bottle: 0,
      calc: 0
    }
  }
  updateDilution(part1, part2) {
    this.setState({
      dilution1: part1,
      dilution2: part2
    });
  }
  updateBottle(bottleSize) {
    this.setState({
      bottle: bottleSize
    });
  }
  updateDilInput(e) {
    if(e.target.name == 1) {
      this.setState({
        dilution1: e.target.value
      });
    } else {
      this.setState({
        dilution2: e.target.value
      });
    }
  }
  updateBottleInput(e) {
    this.setState({
      bottle: e.target.value
    });
  }
  render() {
    let self = this;
    if(this.state.dilution1 !== 0 && this.state.dilution2 !== 0 && this.state.bottle !== 0) {
      calc = calculateDilution(this.state.dilution1, this.state.dilution2, this.state.bottle);
    }
    let renderBottles = Bottles.map(function(bottle) {
      return <Bottle name={bottle.name} size={bottle.size} updateBottle={self.updateBottle} key={bottle.name} />
    });
    let renderDilutions = Dilutions.map(function(dil) {
      return <Dilution name={dil.name} part1={dil.part1} part2={dil.part2} updateDil={self.updateDilution} key={dil.name} />
    });
    return (
      <div>
        <form className="form-inline">
          <div className="form-group">
            <legend>Enter Dilution</legend>
            <input type="number" placeholder="1" name="1" onChange={this.updateDilInput} value={this.state.dilution1} /> : 
            <input type="number" placeholder="2" name="2" onChange={this.updateDilInput} value={this.state.dilution2} />
            <legend>Enter Bottlesize</legend>
            <input type="number" placeholder="5000" name="3" onChange={this.updateBottleInput} value={this.state.bottle} />
          </div>
        </form>
        <h5>Popular Dilutions:</h5>
        <div className="btn-group" role="group">
          {renderDilutions}
        </div>
        <h5>Bottlesize:</h5>
        <div className="btn-group" role="group">
          {renderBottles}
        </div>
        {calc[0] != 0 ? (
          <div>
            <h2>
            Your Dilution: {calc[0]}
            </h2>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: calc[1] + '%'}}>
              </div>
            </div>
          </div>
          ) : ''}
      </div>
    )
  }
}
Index.propTypes = {
  dilution1: React.PropTypes.number,
  dilution2: React.PropTypes.number,
  bottle: React.PropTypes.number,
  calc: React.PropTypes.number
}