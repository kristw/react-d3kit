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
    width: PropTypes.number,
    height: PropTypes.number,
    data: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
    options: PropTypes.object,
    fitOptions: PropTypes.object,
    watch: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object,
    ]),
    onInit: PropTypes.func,
  };

  Chart.getCustomEventNames()
    .map(name => listenerName(name))
    .forEach(name => {
      propTypes[name] = PropTypes.func;
    });

  class Component extends React.Component {

    componentDidMount() {
      const {
        width,
        height,
        data,
        fitOptions,
        watch,
        onInit,
      } = this.props;

      const options = this.props.options || {};

      if (width !== null && width !== undefined) {
        options.initialWidth = width;
      }
      if (height !== null && height !== undefined) {
        options.initialHeight = height;
      }

      const chart = new Chart(this.container, options);

      Chart.getCustomEventNames().forEach(eventName => {
        chart.on(`${eventName}.react`, (...args) => {
          const listener = this.props[listenerName(eventName)];
          if (listener) {
            listener.apply(this, args);
          }
        });
      });

      if (data) {
        chart.data(data);
      }

      if (fitOptions) {
        if (watch) {
          chart.fit(fitOptions, watch);
        } else {
          chart.fit(fitOptions, false);
        }
      }

      if (onInit) {
        onInit(chart);
      }

      this.chart = chart;
    }

    shouldComponentUpdate(nextProps) {
      return this.props.className !== nextProps.className
      || this.props.width !== nextProps.width
      || this.props.height !== nextProps.height
      || this.props.data !== nextProps.data
      || this.props.options !== nextProps.options
      || this.props.fitOptions !== nextProps.fitOptions
      || this.props.watch !== nextProps.watch;
    }

    componentDidUpdate(prevProps) {
      const {
        width,
        height,
        data,
        options,
        fitOptions,
        watch,
      } = this.props;

      if (width !== null && width !== undefined && width !== prevProps.width) {
        this.chart.width(width);
      }
      if (height !== null && height !== undefined && height !== prevProps.height) {
        this.chart.height(height);
      }
      if (options && options !== prevProps.options) {
        this.chart.options(options);
      }
      if (data && data !== prevProps.data) {
        this.chart.data(data);
      }
      if (fitOptions) {
        if (watch) {
          this.chart.fit(fitOptions, watch);
        } else {
          this.chart.fit(fitOptions, false);
        }
      }
      if (!watch) {
        this.chart.stopFitWatcher();
      }
    }

    componentWillUnmount() {
      this.chart.destroy();
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
