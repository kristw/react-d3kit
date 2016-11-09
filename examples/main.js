// window.PlainBubbleChart is a bubble chart class built via d3Kit.
// See implementation in bubbleChart.js
const BubbleChart = ReactD3Kit.createComponent(window.d3BubbleChart);

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
        <button onClick={this.updateData}>Update data</button>
        <button onClick={this.updateOptions}>Update options (colorScale)</button>
        <BubbleChart
          data={this.state.data}
          options={this.state.options}
        />
        <BubbleChart
          data={this.state.data}
          options={this.state.options}
          fitOptions={this.state.fitOptions}
        />
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
