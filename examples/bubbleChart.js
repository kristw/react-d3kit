const { scaleLinear, scaleOrdinal, schemeCategory10 } = d3;
const { axisLeft, axisBottom } = d3;
const { extent } = d3;
const { SvgChart, helper } = d3Kit;

class BubbleChart extends SvgChart {
  // Define default options for this chart
  static getDefaultOptions() {
    const colorScale = scaleOrdinal(schemeCategory10);

    return helper.deepExtend(
      super.getDefaultOptions(),
      {
        margin: {top: 60, right: 60, bottom: 60, left: 60},
        initialWidth: 400,
        initialHeight: 300,
        color: (d,i) => colorScale(i),
      }
    );
  }

  /**
   * Define the names of custom events that can be dispatched from this chart
   * @return {Array[String]} event names
   */
  static getCustomEventNames() {
    return ['bubbleClick'];
  }

  constructor(selector, options) {
    super(selector, options);

    // create <g> layers
    this.layers.create(['content', 'x-axis', 'y-axis']);

    // add custom variables
    this.xScale = scaleLinear();
    this.yScale = scaleLinear();
    this.xAxis = axisBottom().scale(this.xScale);
    this.yAxis = axisLeft().scale(this.yScale);

    // add basic event listeners
    this.visualize = this.visualize.bind(this);
    this.on('resize.default', this.visualize);
    this.on('data.default', this.visualize);
    this.on('options.default', this.visualize);
  }

  // You can define a new function for this class.
  visualize() {
    if(!this.hasData()){
      this.layers.get('content').selectAll('*').remove();
      return;
    }

    const data = this.data();
    const options = this.options();

    this.xScale.domain(extent(data, d => d.x))
      .range([0, this.getInnerWidth()]);
    this.yScale.domain(extent(data, d => d.y))
      .range([this.getInnerHeight(), 0]);

    this.layers.get('x-axis')
      .attr('transform', `translate(0,${this.getInnerHeight()})`)
      .call(this.xAxis);

    this.layers.get('y-axis')
      .call(this.yAxis);

    const selection = this.layers.get('content').selectAll('circle')
      .data(data);

    selection.exit().remove();

    const sEnter = selection.enter().append('circle')
      .attr('cx', d => this.xScale(d.x))
      .attr('cy', d => this.yScale(d.y))
      .on('click', (...args) => {
        this.dispatcher.apply('bubbleClick', this, args);
      });

    selection.merge(sEnter)
      .attr('cx', d => this.xScale(d.x))
      .attr('cy', d => this.yScale(d.y))
      .attr('r', d => d.r)
      .style('fill', options.color);
  }
}

window.d3BubbleChart = BubbleChart;
