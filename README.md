**Introduction** |
[Demo](https://kristw.github.io/react-d3kit)

# react-d3kit [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

Easily convert d3Kit chart into React component

### Install

```bash
npm install react-d3kit --save
```

or

```bash
bower install react-d3kit --save
```

## Example Usage

### Basic

```jsx
// When PlainBubbleChart is a reusable chart written in d3Kit.
const BubbleChart = ReactD3Kit.createComponent(PlainBubbleChart);

ReactDOM.render(
  <BubbleChart data={data} options={options} />,
  document.getElementById('app')
);
```

### With auto-resize

You can pass props `fitOptions` and `watch`, which is equivalent to calling d3Kit's `chart.fit(fitOptions, watch)`. See documentation [here](https://github.com/twitter/d3kit/blob/master/docs/api/AbstractChart.md#fit).

```jsx
// When PlainBubbleChart is a reusable chart written in d3Kit.
const BubbleChart = ReactD3Kit.createComponent(PlainBubbleChart);

const fitOptions = { width: '100%', height: 400 };

ReactDOM.render(
  <BubbleChart
    data={data}
    options={options}
    fitOptions={fitOptions}
    watch={true}
  />,
  document.getElementById('app')
);
```

See [demo source](https://github.com/kristw/react-d3kit/blob/master/examples/main.js)

### Import into your project

##### Choice 1. Global

Adding this library via ```<script>``` tag is the simplest way. By doing this, ```ReactD3Kit``` is available in the global scope.

```html
<script src="bower_components/react-d3kit/dist/react-d3kit.min.js"></script>
```

##### Choice 2: AMD

If you use requirejs, this library support AMD out of the box.

```javascript
require.config({
  paths: {
    'react-d3kit': 'path/to/react-d3kit'
  }
});
require(['react-d3kit'], function(ReactD3Kit) {
  // do something with reactD3Kit
});
```

##### Choice 3: node.js / browserify

This library also supports usage in commonjs style.

```javascript
const ReactD3Kit = require('react-d3kit');
```

##### Choice 4: ES6 Import

```javascript
import { createComponent } from 'react-d3kit';
```

## License

© 2016 [Krist Wongsuphasawat](http://kristw.yellowpigz.com)  ([@kristw](https://twitter.com/kristw)) Apache-2.0 License

[npm-image]: https://badge.fury.io/js/react-d3kit.svg
[npm-url]: https://npmjs.org/package/react-d3kit
[travis-image]: https://travis-ci.org/kristw/react-d3kit.svg?branch=master
[travis-url]: https://travis-ci.org/kristw/react-d3kit
[daviddm-image]: https://david-dm.org/kristw/react-d3kit.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/kristw/react-d3kit