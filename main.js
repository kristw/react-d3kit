// window.PlainBubbleChart is a bubble chart class built via d3Kit.
// See implementation in bubbleChart.js
const BubbleChart = ReactD3Kit.createComponent(window.PlainBubbleChart);

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
    case 0: return d3.scale.category10();
    case 1: return '#3498db';
    case 2: return '#d35400';
    case 3: return '#27ae60';
    case 4: return '#8e44ad';
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: generateBubbles(),
      options: null
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
    this.setState({
      options: {
        color: generateColorScale()
      }
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.updateData}>Update data</button>
        <button onClick={this.updateOptions}>Update options (colorScale)</button>
        <BubbleChart data={this.state.data} options={this.state.options} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
