import ReactDOM from 'react-dom';
import React from 'react';
import PlainBubbleChart from './bubbleChart';
import { createComponent } from '../../src/main';
const BubbleChart = createComponent(PlainBubbleChart);
import './style.css';

function generateBubbles() {
  var bubbles = [];

  for(var i=0;i<100;i++){
    bubbles.push({
      x: Math.random()*100,
      y: Math.random()*100,
      r: Math.random()*5+3
    });
  }

  return bubbles;
}

let x = 1;
function generateColorScale() {
  x = (x+1) % 5;
  switch(x) {
    case 0: return d3.scaleOrdinal(d3.schemeCategory10);
    case 1: return () => '#3498db';
    case 2: return () => '#d35400';
    case 3: return () => '#27ae60';
    case 4: return () => '#8e44ad';
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: generateBubbles(),
      options: null,
      fitOptions: {
        width: '100%'
      }
    };
    this.updateData = this.updateData.bind(this);
    this.updateOptions = this.updateOptions.bind(this);
  }

  updateData() {
    this.setState({
      data: generateBubbles()
    });
  }

  updateOptions() {
    const scale = generateColorScale();
    this.setState({
      options: {
        color: (d,i) => scale(i)
      }
    });
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.updateData}>Update data</button>
          <button onClick={this.updateOptions}>Update options (Change color scale)</button>
        </div>
        <p>
        This chart will maintain its initial size.
        </p>
        <BubbleChart
          data={this.state.data}
          options={this.state.options}
        />
        This chart will fit to 100%, but does not resize when window resize.
        <BubbleChart
          data={this.state.data}
          options={this.state.options}
          fitOptions={this.state.fitOptions}
        />
        This chart will fit to 100% and also resize again when window resize.
        <BubbleChart
          data={this.state.data}
          options={this.state.options}
          fitOptions={this.state.fitOptions}
          watch={true}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
