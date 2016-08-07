import React, { PropTypes } from 'react';

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function listenerName(eventName) {
  return `on${capitalize(eventName)}`;
}

export function createComponent(Chart) {
  const propTypes = {
    className: PropTypes.string,
    data: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
    options: PropTypes.object,
    onInit: PropTypes.func,
  };

  Chart.getCustomEvents()
    .map(name => listenerName(name))
    .forEach(name => {
      propTypes[name] = PropTypes.func;
    });

  class Component extends React.Component {

    componentDidMount() {
      const chart = new Chart(this.container, this.props.options);

      Chart.getCustomEvents().forEach(eventName => {
        chart.on(`${eventName}.react`, (...args) => {
          const listener = this.props[listenerName(eventName)];
          if (listener) {
            listener.apply(this, args);
          }
        });
      });

      if (this.props.data) {
        chart.data(this.props.data);
      }

      if (this.props.onInit) {
        this.props.onInit(chart);
      }

      this.chart = chart;
    }

    shouldComponentUpdate(nextProps) {
      return this.props.className !== nextProps.className
      || this.props.data !== nextProps.data
      || this.props.options !== nextProps.options;
    }

    componentDidUpdate() {
      this.chart
        .options(this.props.options)
        .data(this.props.data);
    }

    componentWillUnmount() {
      this.chart.autoResize(false);
      this.chart.on('.react', null);
    }

    render() {
      return (
        <div
          className={this.props.className}
          ref={c => { this.container = c; }}
        />
      );
    }
  }

  Component.propTypes = propTypes;

  return Component;
}
