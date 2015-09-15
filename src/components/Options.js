import React from 'react';

let availableOptions = [
  {name: 'Marvin', age: 11},
  {name: 'Martin', age: 66},
  {name: 'Martina', age: 31}
];

export default class Options extends React.Component {
  render() {
    let renderOptions = availableOptions.map(function(option) {
      return <li>{option.name}, {option.age}</li>
    });
    return (
      <div>
      <h1 className="cblue">Hello World</h1>
      <ul>
        {renderOptions}
      </ul>
      </div>
    )
  }
}
