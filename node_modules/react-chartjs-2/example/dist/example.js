require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = require('react-chartjs-2');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgba(255,99,132,0.2)',
    borderColor: 'rgba(255,99,132,1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
    hoverBorderColor: 'rgba(255,99,132,1)',
    data: [65, 59, 80, 81, 56, 55, 40]
  }]
};

exports.default = _react2.default.createClass({
  displayName: 'BarExample',

  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Bar Example (custom size)'
      ),
      _react2.default.createElement(_reactChartjs.Bar, {
        data: data,
        width: 100,
        height: 50,
        options: {
          maintainAspectRatio: false
        }
      })
    );
  }
});

},{"react":undefined,"react-chartjs-2":undefined}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = require('react-chartjs-2');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
  labels: ['January'],
  datasets: [{
    label: 'My First dataset',
    fill: false,
    lineTension: 0.1,
    backgroundColor: 'rgba(75,192,192,0.4)',
    borderColor: 'rgba(75,192,192,1)',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(75,192,192,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [{ x: 10, y: 20, r: 5 }]
  }]
};

exports.default = _react2.default.createClass({
  displayName: 'BubbleExample',

  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Bubble Example'
      ),
      _react2.default.createElement(_reactChartjs.Bubble, { data: data })
    );
  }
});

},{"react":undefined,"react-chartjs-2":undefined}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = require('react-chartjs-2');

var _rcolor = require('rcolor');

var _rcolor2 = _interopRequireDefault(_rcolor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	datasets: [{
		label: 'My First dataset',
		backgroundColor: 'rgba(255,99,132,0.2)',
		borderColor: 'rgba(255,99,132,1)',
		borderWidth: 1,
		hoverBackgroundColor: 'rgba(255,99,132,0.4)',
		hoverBorderColor: 'rgba(255,99,132,1)',
		data: [65, 59, 80, 81, 56, 55, 40]
	}]
};

var Graph = _react2.default.createClass({
	displayName: 'Graph',
	componentWillMount: function componentWillMount() {
		this.setState(initialState);
	},
	componentDidMount: function componentDidMount() {

		var _this = this;

		setInterval(function () {
			var oldDataSet = _this.state.datasets[0];
			var newData = [];

			for (var x = 0; x < _this.state.labels.length; x++) {
				newData.push(Math.floor(Math.random() * 100));
			}

			var newDataSet = _extends({}, oldDataSet);

			newDataSet.data = newData;
			newDataSet.backgroundColor = (0, _rcolor2.default)();
			newDataSet.borderColor = (0, _rcolor2.default)();
			newDataSet.hoverBackgroundColor = (0, _rcolor2.default)();
			newDataSet.hoverBorderColor = (0, _rcolor2.default)();

			var newState = _extends({}, initialState, {
				datasets: [newDataSet]
			});

			_this.setState(newState);
		}, 5000);
	},
	render: function render() {
		return _react2.default.createElement(_reactChartjs.Bar, { data: this.state });
	}
});

exports.default = _react2.default.createClass({
	displayName: 'Crazy Random Graph',

	render: function render() {
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'h2',
				null,
				'You can even make crazy graphs like this!'
			),
			_react2.default.createElement(Graph, null)
		);
	}
});

},{"rcolor":17,"react":undefined,"react-chartjs-2":undefined}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = require('react-chartjs-2');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
		labels: ['Red', 'Green', 'Yellow'],
		datasets: [{
				data: [300, 50, 100],
				backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
				hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
		}]
};

exports.default = _react2.default.createClass({
		displayName: 'DoughnutExample',

		render: function render() {
				return _react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
								'h2',
								null,
								'Doughnut Example'
						),
						_react2.default.createElement(_reactChartjs.Doughnut, { data: data })
				);
		}
});

},{"react":undefined,"react-chartjs-2":undefined}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = require('react-chartjs-2');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var getState = function getState() {
  return {
    labels: ['Red', 'Green', 'Yellow'],
    datasets: [{
      data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
      backgroundColor: ['#CCC', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
  };
};

exports.default = _react2.default.createClass({
  displayName: 'DynamicDoughnutExample',

  getInitialState: function getInitialState() {
    return getState();
  },
  componentWillMount: function componentWillMount() {
    var _this = this;

    setInterval(function () {
      _this.setState(getState());
    }, 5000);
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Dynamicly refreshed Doughnut Example'
      ),
      _react2.default.createElement(_reactChartjs.Doughnut, { data: this.state })
    );
  }
});

},{"react":undefined,"react-chartjs-2":undefined}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = require('react-chartjs-2');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgba(255,99,132,0.2)',
    borderColor: 'rgba(255,99,132,1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
    hoverBorderColor: 'rgba(255,99,132,1)',
    data: [65, 59, 80, 81, 56, 55, 40]
  }]
};

exports.default = _react2.default.createClass({
  displayName: 'BarExample',

  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Horizontal Bar Example'
      ),
      _react2.default.createElement(_reactChartjs.HorizontalBar, { data: data })
    );
  }
});

},{"react":undefined,"react-chartjs-2":undefined}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = require('react-chartjs-2');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
  labels: ['Red', 'Green', 'Yellow'],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
  }]
};

var legendOpts = {
  onClick: function onClick(e, item) {
    return alert('Item with text ' + item.text + ' and index ' + item.index + ' clicked');
  },
  onHover: function onHover(e, item) {
    return alert('Item with text ' + item.text + ' and index ' + item.index + ' hovered');
  }
};

exports.default = _react2.default.createClass({
  displayName: 'LegendExample',

  getInitialState: function getInitialState() {
    return {
      legend: legendOpts
    };
  },
  applyLegendSettings: function applyLegendSettings() {
    var value = this.legendOptsInput.value;


    try {
      var opts = JSON.parse(value);
      this.setState({
        legend: opts
      });
    } catch (e) {
      alert(e.message);
      throw Error(e);
    }
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Legend Handlers Example'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Hover over label and click'
      ),
      _react2.default.createElement(_reactChartjs.Pie, { data: data, legend: this.state.legend })
    );
  }
});

},{"react":undefined,"react-chartjs-2":undefined}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = require('react-chartjs-2');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
  labels: ['Red', 'Green', 'Yellow'],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
  }]
};

var legendOpts = {
  display: true,
  position: 'top',
  fullWidth: true,
  reverse: false,
  labels: {
    fontColor: 'rgb(255, 99, 132)'
  }
};

exports.default = _react2.default.createClass({
  displayName: 'LegendExample',

  getInitialState: function getInitialState() {
    return {
      legend: legendOpts
    };
  },
  applyLegendSettings: function applyLegendSettings() {
    var value = this.legendOptsInput.value;


    try {
      var opts = JSON.parse(value);
      this.setState({
        legend: opts
      });
    } catch (e) {
      alert(e.message);
      throw Error(e);
    }
  },
  render: function render() {
    var _this = this;

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Legend Options Example'
      ),
      _react2.default.createElement('textarea', {
        cols: '40',
        rows: '15',
        ref: function ref(input) {
          _this.legendOptsInput = input;
        },
        defaultValue: JSON.stringify(this.state.legend, null, 2) }),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          { onClick: this.applyLegendSettings },
          'Apply legend settings'
        )
      ),
      _react2.default.createElement(_reactChartjs.Pie, { data: data, legend: this.state.legend, redraw: true })
    );
  }
});

},{"react":undefined,"react-chartjs-2":undefined}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = require('react-chartjs-2');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'My First dataset',
    fill: false,
    lineTension: 0.1,
    backgroundColor: 'rgba(75,192,192,0.4)',
    borderColor: 'rgba(75,192,192,1)',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(75,192,192,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [65, 59, 80, 81, 56, 55, 40]
  }]
};

exports.default = _react2.default.createClass({
  displayName: 'LineExample',

  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Line Example'
      ),
      _react2.default.createElement(_reactChartjs.Line, { data: data })
    );
  }
});

},{"react":undefined,"react-chartjs-2":undefined}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = require('react-chartjs-2');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'Sales',
    type: 'line',
    data: [51, 65, 40, 49, 60, 37, 40],
    fill: false,
    borderColor: '#EC932F',
    backgroundColor: '#EC932F',
    pointBorderColor: '#EC932F',
    pointBackgroundColor: '#EC932F',
    pointHoverBackgroundColor: '#EC932F',
    pointHoverBorderColor: '#EC932F',
    yAxisID: 'y-axis-2'
  }, {
    type: 'bar',
    label: 'Visitor',
    data: [200, 185, 590, 621, 250, 400, 95],
    fill: false,
    backgroundColor: '#71B37C',
    borderColor: '#71B37C',
    hoverBackgroundColor: '#71B37C',
    hoverBorderColor: '#71B37C',
    yAxisID: 'y-axis-1'
  }]
};

var options = {
  responsive: true,
  tooltips: {
    mode: 'label'
  },
  elements: {
    line: {
      fill: false
    }
  },
  scales: {
    xAxes: [{
      display: true,
      gridLines: {
        display: false
      },
      labels: {
        show: true
      }
    }],
    yAxes: [{
      type: 'linear',
      display: true,
      position: 'left',
      id: 'y-axis-1',
      gridLines: {
        display: false
      },
      labels: {
        show: true
      }
    }, {
      type: 'linear',
      display: true,
      position: 'right',
      id: 'y-axis-2',
      gridLines: {
        display: false
      },
      labels: {
        show: true
      }
    }]
  }
};

var plugins = [{
  afterDraw: function afterDraw(chartInstance, easing) {
    var ctx = chartInstance.chart.ctx;
    ctx.fillText("This text drawn by a plugin", 100, 100);
  }
}];

exports.default = _react2.default.createClass({
  displayName: 'MixExample',

  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Mixed data Example'
      ),
      _react2.default.createElement(_reactChartjs.Bar, {
        data: data,
        options: options,
        plugins: plugins
      })
    );
  }
});

},{"react":undefined,"react-chartjs-2":undefined}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = require('react-chartjs-2');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
		labels: ['Red', 'Green', 'Yellow'],
		datasets: [{
				data: [300, 50, 100],
				backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
				hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
		}]
};

exports.default = _react2.default.createClass({
		displayName: 'PieExample',

		render: function render() {
				return _react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
								'h2',
								null,
								'Pie Example'
						),
						_react2.default.createElement(_reactChartjs.Pie, { data: data })
				);
		}
});

},{"react":undefined,"react-chartjs-2":undefined}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = require('react-chartjs-2');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
  datasets: [{
    data: [11, 16, 7, 3, 14],
    backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
    label: 'My dataset' // for legend
  }],
  labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue']
};

exports.default = _react2.default.createClass({
  displayName: 'PolarExample',

  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Polar Example'
      ),
      _react2.default.createElement(_reactChartjs.Polar, { data: data })
    );
  }
});

},{"react":undefined,"react-chartjs-2":undefined}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = require('react-chartjs-2');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgba(179,181,198,0.2)',
    borderColor: 'rgba(179,181,198,1)',
    pointBackgroundColor: 'rgba(179,181,198,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(179,181,198,1)',
    data: [65, 59, 90, 81, 56, 55, 40]
  }, {
    label: 'My Second dataset',
    backgroundColor: 'rgba(255,99,132,0.2)',
    borderColor: 'rgba(255,99,132,1)',
    pointBackgroundColor: 'rgba(255,99,132,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(255,99,132,1)',
    data: [28, 48, 40, 19, 96, 27, 100]
  }]
};

exports.default = _react2.default.createClass({
  displayName: 'RadarExample',

  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Radar Example'
      ),
      _react2.default.createElement(_reactChartjs.Radar, { data: data })
    );
  }
});

},{"react":undefined,"react-chartjs-2":undefined}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = require('react-chartjs-2');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'My First dataset',
    fill: false,
    lineTension: 0.1,
    backgroundColor: 'rgba(75,192,192,0.4)',
    borderColor: 'rgba(75,192,192,1)',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(75,192,192,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [65, 59, 80, 81, 56, 55, 40]
  }]
};

var Graph = _react2.default.createClass({
  displayName: 'Graph',
  componentWillMount: function componentWillMount() {
    this.setState(initialState);
  },
  componentDidMount: function componentDidMount() {

    var _this = this;

    setInterval(function () {
      var oldDataSet = _this.state.datasets[0];
      var newData = [];

      for (var x = 0; x < _this.state.labels.length; x++) {
        newData.push(Math.floor(Math.random() * 100));
      }

      var newDataSet = _extends({}, oldDataSet);

      newDataSet.data = newData;

      var newState = _extends({}, initialState, {
        datasets: [newDataSet]
      });

      _this.setState(newState);
    }, 5000);
  },
  render: function render() {
    return _react2.default.createElement(_reactChartjs.Line, { data: this.state });
  }
});

exports.default = _react2.default.createClass({
  displayName: 'RandomizedDataLineExample',

  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Random Animated Line Example'
      ),
      _react2.default.createElement(Graph, null)
    );
  }
});

},{"react":undefined,"react-chartjs-2":undefined}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = require('react-chartjs-2');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
  labels: ['Scatter'],
  datasets: [{
    label: 'My First dataset',
    fill: false,
    backgroundColor: 'rgba(75,192,192,0.4)',
    pointBorderColor: 'rgba(75,192,192,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [{ x: 65, y: 75 }, { x: 59, y: 49 }, { x: 80, y: 90 }, { x: 81, y: 29 }, { x: 56, y: 36 }, { x: 55, y: 25 }, { x: 40, y: 18 }]
  }]
};

exports.default = _react2.default.createClass({
  displayName: 'ScatterExample',

  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Scatter Example'
      ),
      _react2.default.createElement(_reactChartjs.Scatter, { data: data })
    );
  }
});

},{"react":undefined,"react-chartjs-2":undefined}],16:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _doughnut = require('./components/doughnut');

var _doughnut2 = _interopRequireDefault(_doughnut);

var _dynamicDoughnut = require('./components/dynamic-doughnut');

var _dynamicDoughnut2 = _interopRequireDefault(_dynamicDoughnut);

var _pie = require('./components/pie');

var _pie2 = _interopRequireDefault(_pie);

var _line = require('./components/line');

var _line2 = _interopRequireDefault(_line);

var _bar = require('./components/bar');

var _bar2 = _interopRequireDefault(_bar);

var _horizontalBar = require('./components/horizontalBar');

var _horizontalBar2 = _interopRequireDefault(_horizontalBar);

var _radar = require('./components/radar');

var _radar2 = _interopRequireDefault(_radar);

var _polar = require('./components/polar');

var _polar2 = _interopRequireDefault(_polar);

var _bubble = require('./components/bubble');

var _bubble2 = _interopRequireDefault(_bubble);

var _scatter = require('./components/scatter');

var _scatter2 = _interopRequireDefault(_scatter);

var _mix = require('./components/mix');

var _mix2 = _interopRequireDefault(_mix);

var _randomizedLine = require('./components/randomizedLine');

var _randomizedLine2 = _interopRequireDefault(_randomizedLine);

var _crazyLine = require('./components/crazyLine');

var _crazyLine2 = _interopRequireDefault(_crazyLine);

var _legendOptions = require('./components/legend-options');

var _legendOptions2 = _interopRequireDefault(_legendOptions);

var _legendHandlers = require('./components/legend-handlers');

var _legendHandlers2 = _interopRequireDefault(_legendHandlers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement('hr', null),
				_react2.default.createElement(_doughnut2.default, null),
				_react2.default.createElement('hr', null),
				_react2.default.createElement(_dynamicDoughnut2.default, null),
				_react2.default.createElement('hr', null),
				_react2.default.createElement(_pie2.default, null),
				_react2.default.createElement('hr', null),
				_react2.default.createElement(_line2.default, null),
				_react2.default.createElement('hr', null),
				_react2.default.createElement(_bar2.default, null),
				_react2.default.createElement('hr', null),
				_react2.default.createElement(_horizontalBar2.default, null),
				_react2.default.createElement('hr', null),
				_react2.default.createElement(_radar2.default, null),
				_react2.default.createElement('hr', null),
				_react2.default.createElement(_polar2.default, null),
				_react2.default.createElement('hr', null),
				_react2.default.createElement(_bubble2.default, null),
				_react2.default.createElement('hr', null),
				_react2.default.createElement(_scatter2.default, null),
				_react2.default.createElement('hr', null),
				_react2.default.createElement(_mix2.default, null),
				_react2.default.createElement('hr', null),
				_react2.default.createElement(_randomizedLine2.default, null),
				_react2.default.createElement('hr', null),
				_react2.default.createElement(_crazyLine2.default, null),
				_react2.default.createElement('hr', null),
				_react2.default.createElement(_legendOptions2.default, null),
				_react2.default.createElement('hr', null),
				_react2.default.createElement(_legendHandlers2.default, null)
			);
		}
	}]);

	return App;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));

},{"./components/bar":1,"./components/bubble":2,"./components/crazyLine":3,"./components/doughnut":4,"./components/dynamic-doughnut":5,"./components/horizontalBar":6,"./components/legend-handlers":7,"./components/legend-options":8,"./components/line":9,"./components/mix":10,"./components/pie":11,"./components/polar":12,"./components/radar":13,"./components/randomizedLine":14,"./components/scatter":15,"react":undefined,"react-dom":undefined}],17:[function(require,module,exports){
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (h, s, v) {
  var hi = Math.floor(h * 6);
  var f = h * 6 - hi;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);
  var r = 255;
  var g = 255;
  var b = 255;

  switch (hi) {
    case 0:
      r = v;g = t;b = p;break;
    case 1:
      r = q;g = v;b = p;break;
    case 2:
      r = p;g = v;b = t;break;
    case 3:
      r = p;g = q;b = v;break;
    case 4:
      r = t;g = p;b = v;break;
    case 5:
      r = v;g = p;b = q;break;
  }
  return [Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255)];
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var padHex = __webpack_require__(2);

module.exports = function (rgb) {
  var parts = rgb.map(function (val) {
    return padHex(val.toString(16));
  }).join('');

  return '#' + parts;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hexWidth = 2;

module.exports = function (str) {
  if (str.length > hexWidth) return str;
  return new Array(hexWidth - str.length + 1).join('0') + str;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hsvToRgb = __webpack_require__(0);
var rgbToHex = __webpack_require__(1);
var goldenRatio = 0.618033988749895;

function getRgb() {
  var inputs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var hue = inputs.hue,
      saturation = inputs.saturation,
      value = inputs.value;

  if (!hue) hue = Math.random();
  hue += goldenRatio;
  hue %= 1;

  if (typeof saturation !== 'number') saturation = 0.5;
  if (typeof value !== 'number') value = 0.95;

  return hsvToRgb(hue, saturation, value);
}

function getHex(opts, inputs) {
  var rgb = getRgb(opts, inputs);
  return rgbToHex(rgb);
}

module.exports = getHex;

/***/ })
/******/ ]);
},{}]},{},[16])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL3NyYy9jb21wb25lbnRzL2Jhci5qcyIsImV4YW1wbGUvc3JjL2NvbXBvbmVudHMvYnViYmxlLmpzIiwiZXhhbXBsZS9zcmMvY29tcG9uZW50cy9jcmF6eUxpbmUuanMiLCJleGFtcGxlL3NyYy9jb21wb25lbnRzL2RvdWdobnV0LmpzIiwiZXhhbXBsZS9zcmMvY29tcG9uZW50cy9keW5hbWljLWRvdWdobnV0LmpzIiwiZXhhbXBsZS9zcmMvY29tcG9uZW50cy9ob3Jpem9udGFsQmFyLmpzIiwiZXhhbXBsZS9zcmMvY29tcG9uZW50cy9sZWdlbmQtaGFuZGxlcnMuanMiLCJleGFtcGxlL3NyYy9jb21wb25lbnRzL2xlZ2VuZC1vcHRpb25zLmpzIiwiZXhhbXBsZS9zcmMvY29tcG9uZW50cy9saW5lLmpzIiwiZXhhbXBsZS9zcmMvY29tcG9uZW50cy9taXguanMiLCJleGFtcGxlL3NyYy9jb21wb25lbnRzL3BpZS5qcyIsImV4YW1wbGUvc3JjL2NvbXBvbmVudHMvcG9sYXIuanMiLCJleGFtcGxlL3NyYy9jb21wb25lbnRzL3JhZGFyLmpzIiwiZXhhbXBsZS9zcmMvY29tcG9uZW50cy9yYW5kb21pemVkTGluZS5qcyIsImV4YW1wbGUvc3JjL2NvbXBvbmVudHMvc2NhdHRlci5qcyIsImV4YW1wbGUvc3JjL2V4YW1wbGUuanMiLCJub2RlX21vZHVsZXMvcmNvbG9yL2Rpc3QvcmNvbG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUE7Ozs7QUFDQTs7OztBQUVBLElBQU0sT0FBTztBQUNYLFVBQVEsQ0FBQyxTQUFELEVBQVksVUFBWixFQUF3QixPQUF4QixFQUFpQyxPQUFqQyxFQUEwQyxLQUExQyxFQUFpRCxNQUFqRCxFQUF5RCxNQUF6RCxDQURHO0FBRVgsWUFBVSxDQUNSO0FBQ0UsV0FBTyxrQkFEVDtBQUVFLHFCQUFpQixzQkFGbkI7QUFH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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtCYXJ9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XG5cbmNvbnN0IGRhdGEgPSB7XG4gIGxhYmVsczogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknXSxcbiAgZGF0YXNldHM6IFtcbiAgICB7XG4gICAgICBsYWJlbDogJ015IEZpcnN0IGRhdGFzZXQnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsOTksMTMyLDAuMiknLFxuICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSw5OSwxMzIsMSknLFxuICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICBob3ZlckJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LDk5LDEzMiwwLjQpJyxcbiAgICAgIGhvdmVyQm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSw5OSwxMzIsMSknLFxuICAgICAgZGF0YTogWzY1LCA1OSwgODAsIDgxLCA1NiwgNTUsIDQwXVxuICAgIH1cbiAgXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0JhckV4YW1wbGUnLFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPkJhciBFeGFtcGxlIChjdXN0b20gc2l6ZSk8L2gyPlxuICAgICAgICA8QmFyXG4gICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgIGhlaWdodD17NTB9XG4gICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2VcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtCdWJibGV9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XG5cbmNvbnN0IGRhdGEgPSB7XG4gIGxhYmVsczogWydKYW51YXJ5J10sXG4gIGRhdGFzZXRzOiBbXG4gICAge1xuICAgICAgbGFiZWw6ICdNeSBGaXJzdCBkYXRhc2V0JyxcbiAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgbGluZVRlbnNpb246IDAuMSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoNzUsMTkyLDE5MiwwLjQpJyxcbiAgICAgIGJvcmRlckNvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDEpJyxcbiAgICAgIGJvcmRlckNhcFN0eWxlOiAnYnV0dCcsXG4gICAgICBib3JkZXJEYXNoOiBbXSxcbiAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuMCxcbiAgICAgIGJvcmRlckpvaW5TdHlsZTogJ21pdGVyJyxcbiAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICdyZ2JhKDc1LDE5MiwxOTIsMSknLFxuICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDEsXG4gICAgICBwb2ludEhvdmVyUmFkaXVzOiA1LFxuICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogJ3JnYmEoNzUsMTkyLDE5MiwxKScsXG4gICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6ICdyZ2JhKDIyMCwyMjAsMjIwLDEpJyxcbiAgICAgIHBvaW50SG92ZXJCb3JkZXJXaWR0aDogMixcbiAgICAgIHBvaW50UmFkaXVzOiAxLFxuICAgICAgcG9pbnRIaXRSYWRpdXM6IDEwLFxuICAgICAgZGF0YTogW3t4OjEwLHk6MjAscjo1fV1cbiAgICB9XG4gIF1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdCdWJibGVFeGFtcGxlJyxcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5CdWJibGUgRXhhbXBsZTwvaDI+XG4gICAgICAgIDxCdWJibGUgZGF0YT17ZGF0YX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QmFyfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xuaW1wb3J0IGNvbG9yIGZyb20gJ3Jjb2xvcic7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbGFiZWxzOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseSddLFxuICBkYXRhc2V0czogW1xuICAgIHtcblx0XHRsYWJlbDogJ015IEZpcnN0IGRhdGFzZXQnLFxuXHRcdGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LDk5LDEzMiwwLjIpJyxcblx0XHRib3JkZXJDb2xvcjogJ3JnYmEoMjU1LDk5LDEzMiwxKScsXG5cdFx0Ym9yZGVyV2lkdGg6IDEsXG5cdFx0aG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSw5OSwxMzIsMC40KScsXG5cdFx0aG92ZXJCb3JkZXJDb2xvcjogJ3JnYmEoMjU1LDk5LDEzMiwxKScsXG5cdFx0ZGF0YTogWzY1LCA1OSwgODAsIDgxLCA1NiwgNTUsIDQwXVxuICAgIH1cbiAgXVxufTtcblxuXG5cbmNvbnN0IEdyYXBoID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTogJ0dyYXBoJyxcblx0Y29tcG9uZW50V2lsbE1vdW50KCl7XG5cdFx0dGhpcy5zZXRTdGF0ZShpbml0aWFsU3RhdGUpO1xuXHR9LFxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXG5cdFx0dmFyIF90aGlzID0gdGhpcztcblxuXHRcdHNldEludGVydmFsKGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgb2xkRGF0YVNldCA9IF90aGlzLnN0YXRlLmRhdGFzZXRzWzBdO1xuXHRcdFx0dmFyIG5ld0RhdGEgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciB4PTA7IHg8IF90aGlzLnN0YXRlLmxhYmVscy5sZW5ndGg7IHgrKyl7XG5cdFx0XHRcdG5ld0RhdGEucHVzaChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIG5ld0RhdGFTZXQgPSB7XG5cdFx0XHRcdC4uLm9sZERhdGFTZXRcblx0XHRcdH07XG5cblx0XHRcdG5ld0RhdGFTZXQuZGF0YSA9IG5ld0RhdGE7XG5cdFx0XHRuZXdEYXRhU2V0LmJhY2tncm91bmRDb2xvciA9IGNvbG9yKCk7XG5cdFx0XHRuZXdEYXRhU2V0LmJvcmRlckNvbG9yID0gY29sb3IoKTtcblx0XHRcdG5ld0RhdGFTZXQuaG92ZXJCYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcigpO1xuXHRcdFx0bmV3RGF0YVNldC5ob3ZlckJvcmRlckNvbG9yID0gY29sb3IoKTtcblxuXHRcdFx0dmFyIG5ld1N0YXRlID0ge1xuXHRcdFx0XHQuLi5pbml0aWFsU3RhdGUsXG5cdFx0XHRcdGRhdGFzZXRzOiBbbmV3RGF0YVNldF1cblx0XHRcdH07XG5cblx0XHRcdF90aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcblx0XHR9LCA1MDAwKTtcblx0fSxcblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8QmFyIGRhdGE9e3RoaXMuc3RhdGV9IC8+XG5cdFx0KTtcblx0fVxufSk7XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdDcmF6eSBSYW5kb20gR3JhcGgnLFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPllvdSBjYW4gZXZlbiBtYWtlIGNyYXp5IGdyYXBocyBsaWtlIHRoaXMhPC9oMj5cbiBcdFx0PEdyYXBoIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0RvdWdobnV0fSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xuXG5jb25zdCBkYXRhID0ge1xuXHRsYWJlbHM6IFtcblx0XHQnUmVkJyxcblx0XHQnR3JlZW4nLFxuXHRcdCdZZWxsb3cnXG5cdF0sXG5cdGRhdGFzZXRzOiBbe1xuXHRcdGRhdGE6IFszMDAsIDUwLCAxMDBdLFxuXHRcdGJhY2tncm91bmRDb2xvcjogW1xuXHRcdCcjRkY2Mzg0Jyxcblx0XHQnIzM2QTJFQicsXG5cdFx0JyNGRkNFNTYnXG5cdFx0XSxcblx0XHRob3ZlckJhY2tncm91bmRDb2xvcjogW1xuXHRcdCcjRkY2Mzg0Jyxcblx0XHQnIzM2QTJFQicsXG5cdFx0JyNGRkNFNTYnXG5cdFx0XVxuXHR9XVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0RvdWdobnV0RXhhbXBsZScsXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+RG91Z2hudXQgRXhhbXBsZTwvaDI+XG4gICAgICAgIDxEb3VnaG51dCBkYXRhPXtkYXRhfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtEb3VnaG51dH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcblxuZnVuY3Rpb24gZ2V0UmFuZG9tSW50IChtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xufVxuXG5jb25zdCBnZXRTdGF0ZSA9ICgpID0+ICh7XG4gIGxhYmVsczogW1xuICAgICdSZWQnLFxuICAgICdHcmVlbicsXG4gICAgJ1llbGxvdydcbiAgXSxcbiAgZGF0YXNldHM6IFt7XG4gICAgZGF0YTogW2dldFJhbmRvbUludCg1MCwgMjAwKSwgZ2V0UmFuZG9tSW50KDEwMCwgMTUwKSwgZ2V0UmFuZG9tSW50KDE1MCwgMjUwKV0sXG4gICAgYmFja2dyb3VuZENvbG9yOiBbXG4gICAgJyNDQ0MnLFxuICAgICcjMzZBMkVCJyxcbiAgICAnI0ZGQ0U1NidcbiAgICBdLFxuICAgIGhvdmVyQmFja2dyb3VuZENvbG9yOiBbXG4gICAgJyNGRjYzODQnLFxuICAgICcjMzZBMkVCJyxcbiAgICAnI0ZGQ0U1NidcbiAgICBdXG4gIH1dXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0R5bmFtaWNEb3VnaG51dEV4YW1wbGUnLFxuXG5cdGdldEluaXRpYWxTdGF0ZSgpIHtcblx0XHRyZXR1cm4gZ2V0U3RhdGUoKTtcblx0fSxcblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0c2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZShnZXRTdGF0ZSgpKTtcblx0XHR9LCA1MDAwKTtcblx0fSxcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5EeW5hbWljbHkgcmVmcmVzaGVkIERvdWdobnV0IEV4YW1wbGU8L2gyPlxuICAgICAgICA8RG91Z2hudXQgZGF0YT17dGhpcy5zdGF0ZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7SG9yaXpvbnRhbEJhcn0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcblxuY29uc3QgZGF0YSA9IHtcbiAgbGFiZWxzOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseSddLFxuICBkYXRhc2V0czogW1xuICAgIHtcbiAgICAgIGxhYmVsOiAnTXkgRmlyc3QgZGF0YXNldCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSw5OSwxMzIsMC4yKScsXG4gICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LDk5LDEzMiwxKScsXG4gICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgIGhvdmVyQmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsOTksMTMyLDAuNCknLFxuICAgICAgaG92ZXJCb3JkZXJDb2xvcjogJ3JnYmEoMjU1LDk5LDEzMiwxKScsXG4gICAgICBkYXRhOiBbNjUsIDU5LCA4MCwgODEsIDU2LCA1NSwgNDBdXG4gICAgfVxuICBdXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnQmFyRXhhbXBsZScsXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+SG9yaXpvbnRhbCBCYXIgRXhhbXBsZTwvaDI+XG4gICAgICAgIDxIb3Jpem9udGFsQmFyIGRhdGE9e2RhdGF9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1BpZX0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcblxuY29uc3QgZGF0YSA9IHtcbiAgbGFiZWxzOiBbXG4gICAgJ1JlZCcsXG4gICAgJ0dyZWVuJyxcbiAgICAnWWVsbG93J1xuICBdLFxuICBkYXRhc2V0czogW3tcbiAgICBkYXRhOiBbMzAwLCA1MCwgMTAwXSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcbiAgICAnI0ZGNjM4NCcsXG4gICAgJyMzNkEyRUInLFxuICAgICcjRkZDRTU2J1xuICAgIF0sXG4gICAgaG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFtcbiAgICAnI0ZGNjM4NCcsXG4gICAgJyMzNkEyRUInLFxuICAgICcjRkZDRTU2J1xuICAgIF1cbiAgfV1cbn07XG5cbmNvbnN0IGxlZ2VuZE9wdHMgPSB7XG4gIG9uQ2xpY2s6IChlLCBpdGVtKSA9PiBhbGVydChgSXRlbSB3aXRoIHRleHQgJHtpdGVtLnRleHR9IGFuZCBpbmRleCAke2l0ZW0uaW5kZXh9IGNsaWNrZWRgKSxcbiAgb25Ib3ZlcjogKGUsIGl0ZW0pID0+IGFsZXJ0KGBJdGVtIHdpdGggdGV4dCAke2l0ZW0udGV4dH0gYW5kIGluZGV4ICR7aXRlbS5pbmRleH0gaG92ZXJlZGApLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0xlZ2VuZEV4YW1wbGUnLFxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGVnZW5kOiBsZWdlbmRPcHRzXG4gICAgfVxuICB9LFxuXG4gIGFwcGx5TGVnZW5kU2V0dGluZ3MoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5sZWdlbmRPcHRzSW5wdXQ7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgb3B0cyA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxlZ2VuZDogb3B0c1xuICAgICAgfSk7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBhbGVydChlLm1lc3NhZ2UpO1xuICAgICAgdGhyb3cgRXJyb3IoZSk7XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPkxlZ2VuZCBIYW5kbGVycyBFeGFtcGxlPC9oMj5cbiAgICAgICAgPHA+SG92ZXIgb3ZlciBsYWJlbCBhbmQgY2xpY2s8L3A+XG4gICAgICAgIDxQaWUgZGF0YT17ZGF0YX0gbGVnZW5kPXt0aGlzLnN0YXRlLmxlZ2VuZH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7UGllfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xuXG5jb25zdCBkYXRhID0ge1xuICBsYWJlbHM6IFtcbiAgICAnUmVkJyxcbiAgICAnR3JlZW4nLFxuICAgICdZZWxsb3cnXG4gIF0sXG4gIGRhdGFzZXRzOiBbe1xuICAgIGRhdGE6IFszMDAsIDUwLCAxMDBdLFxuICAgIGJhY2tncm91bmRDb2xvcjogW1xuICAgICcjRkY2Mzg0JyxcbiAgICAnIzM2QTJFQicsXG4gICAgJyNGRkNFNTYnXG4gICAgXSxcbiAgICBob3ZlckJhY2tncm91bmRDb2xvcjogW1xuICAgICcjRkY2Mzg0JyxcbiAgICAnIzM2QTJFQicsXG4gICAgJyNGRkNFNTYnXG4gICAgXVxuICB9XVxufTtcblxuY29uc3QgbGVnZW5kT3B0cyA9IHtcbiAgZGlzcGxheTogdHJ1ZSxcbiAgcG9zaXRpb246ICd0b3AnLFxuICBmdWxsV2lkdGg6IHRydWUsXG4gIHJldmVyc2U6IGZhbHNlLFxuICBsYWJlbHM6IHtcbiAgICBmb250Q29sb3I6ICdyZ2IoMjU1LCA5OSwgMTMyKSdcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0xlZ2VuZEV4YW1wbGUnLFxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGVnZW5kOiBsZWdlbmRPcHRzXG4gICAgfVxuICB9LFxuXG4gIGFwcGx5TGVnZW5kU2V0dGluZ3MoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5sZWdlbmRPcHRzSW5wdXQ7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgb3B0cyA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxlZ2VuZDogb3B0c1xuICAgICAgfSk7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBhbGVydChlLm1lc3NhZ2UpO1xuICAgICAgdGhyb3cgRXJyb3IoZSk7XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPkxlZ2VuZCBPcHRpb25zIEV4YW1wbGU8L2gyPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBjb2xzPVwiNDBcIlxuICAgICAgICAgIHJvd3M9XCIxNVwiXG4gICAgICAgICAgcmVmPXtpbnB1dCA9PiB7IHRoaXMubGVnZW5kT3B0c0lucHV0ID0gaW5wdXQ7IH19XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLmxlZ2VuZCwgbnVsbCwgMil9PjwvdGV4dGFyZWE+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFwcGx5TGVnZW5kU2V0dGluZ3N9PkFwcGx5IGxlZ2VuZCBzZXR0aW5nczwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFBpZSBkYXRhPXtkYXRhfSBsZWdlbmQ9e3RoaXMuc3RhdGUubGVnZW5kfSByZWRyYXcgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGluZX0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcblxuY29uc3QgZGF0YSA9IHtcbiAgbGFiZWxzOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseSddLFxuICBkYXRhc2V0czogW1xuICAgIHtcbiAgICAgIGxhYmVsOiAnTXkgRmlyc3QgZGF0YXNldCcsXG4gICAgICBmaWxsOiBmYWxzZSxcbiAgICAgIGxpbmVUZW5zaW9uOiAwLjEsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDc1LDE5MiwxOTIsMC40KScsXG4gICAgICBib3JkZXJDb2xvcjogJ3JnYmEoNzUsMTkyLDE5MiwxKScsXG4gICAgICBib3JkZXJDYXBTdHlsZTogJ2J1dHQnLFxuICAgICAgYm9yZGVyRGFzaDogW10sXG4gICAgICBib3JkZXJEYXNoT2Zmc2V0OiAwLjAsXG4gICAgICBib3JkZXJKb2luU3R5bGU6ICdtaXRlcicsXG4gICAgICBwb2ludEJvcmRlckNvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDEpJyxcbiAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICBwb2ludEJvcmRlcldpZHRoOiAxLFxuICAgICAgcG9pbnRIb3ZlclJhZGl1czogNSxcbiAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDc1LDE5MiwxOTIsMSknLFxuICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiAncmdiYSgyMjAsMjIwLDIyMCwxKScsXG4gICAgICBwb2ludEhvdmVyQm9yZGVyV2lkdGg6IDIsXG4gICAgICBwb2ludFJhZGl1czogMSxcbiAgICAgIHBvaW50SGl0UmFkaXVzOiAxMCxcbiAgICAgIGRhdGE6IFs2NSwgNTksIDgwLCA4MSwgNTYsIDU1LCA0MF1cbiAgICB9XG4gIF1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdMaW5lRXhhbXBsZScsXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+TGluZSBFeGFtcGxlPC9oMj5cbiAgICAgICAgPExpbmUgZGF0YT17ZGF0YX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QmFyfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xuXG5jb25zdCBkYXRhID0ge1xuICBsYWJlbHM6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5J10sXG4gIGRhdGFzZXRzOiBbe1xuICAgICAgbGFiZWw6ICdTYWxlcycsXG4gICAgICB0eXBlOidsaW5lJyxcbiAgICAgIGRhdGE6IFs1MSwgNjUsIDQwLCA0OSwgNjAsIDM3LCA0MF0sXG4gICAgICBmaWxsOiBmYWxzZSxcbiAgICAgIGJvcmRlckNvbG9yOiAnI0VDOTMyRicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRUM5MzJGJyxcbiAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICcjRUM5MzJGJyxcbiAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAnI0VDOTMyRicsXG4gICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAnI0VDOTMyRicsXG4gICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6ICcjRUM5MzJGJyxcbiAgICAgIHlBeGlzSUQ6ICd5LWF4aXMtMidcbiAgICB9LHtcbiAgICAgIHR5cGU6ICdiYXInLFxuICAgICAgbGFiZWw6ICdWaXNpdG9yJyxcbiAgICAgIGRhdGE6IFsyMDAsIDE4NSwgNTkwLCA2MjEsIDI1MCwgNDAwLCA5NV0sXG4gICAgICBmaWxsOiBmYWxzZSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM3MUIzN0MnLFxuICAgICAgYm9yZGVyQ29sb3I6ICcjNzFCMzdDJyxcbiAgICAgIGhvdmVyQmFja2dyb3VuZENvbG9yOiAnIzcxQjM3QycsXG4gICAgICBob3ZlckJvcmRlckNvbG9yOiAnIzcxQjM3QycsXG4gICAgICB5QXhpc0lEOiAneS1heGlzLTEnXG4gICAgfV1cbn07XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIHJlc3BvbnNpdmU6IHRydWUsXG4gIHRvb2x0aXBzOiB7XG4gICAgbW9kZTogJ2xhYmVsJ1xuICB9LFxuICBlbGVtZW50czoge1xuICAgIGxpbmU6IHtcbiAgICAgIGZpbGw6IGZhbHNlXG4gICAgfVxuICB9LFxuICBzY2FsZXM6IHtcbiAgICB4QXhlczogW1xuICAgICAge1xuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICBzaG93OiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdLFxuICAgIHlBeGVzOiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdsaW5lYXInLFxuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLFxuICAgICAgICBpZDogJ3ktYXhpcy0xJyxcbiAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgc2hvdzogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnbGluZWFyJyxcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgIGlkOiAneS1heGlzLTInLFxuICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICBzaG93OiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH1cbn07XG5cbmNvbnN0IHBsdWdpbnMgPSBbe1xuICAgIGFmdGVyRHJhdzogKGNoYXJ0SW5zdGFuY2UsIGVhc2luZykgPT4ge1xuICAgICAgICBjb25zdCBjdHggPSBjaGFydEluc3RhbmNlLmNoYXJ0LmN0eDtcbiAgICAgICAgY3R4LmZpbGxUZXh0KFwiVGhpcyB0ZXh0IGRyYXduIGJ5IGEgcGx1Z2luXCIsIDEwMCwgMTAwKTtcbiAgICB9XG59XTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ01peEV4YW1wbGUnLFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPk1peGVkIGRhdGEgRXhhbXBsZTwvaDI+XG4gICAgICAgIDxCYXJcbiAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgcGx1Z2lucz17cGx1Z2luc31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7UGllfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xuXG5jb25zdCBkYXRhID0ge1xuXHRsYWJlbHM6IFtcblx0XHQnUmVkJyxcblx0XHQnR3JlZW4nLFxuXHRcdCdZZWxsb3cnXG5cdF0sXG5cdGRhdGFzZXRzOiBbe1xuXHRcdGRhdGE6IFszMDAsIDUwLCAxMDBdLFxuXHRcdGJhY2tncm91bmRDb2xvcjogW1xuXHRcdCcjRkY2Mzg0Jyxcblx0XHQnIzM2QTJFQicsXG5cdFx0JyNGRkNFNTYnXG5cdFx0XSxcblx0XHRob3ZlckJhY2tncm91bmRDb2xvcjogW1xuXHRcdCcjRkY2Mzg0Jyxcblx0XHQnIzM2QTJFQicsXG5cdFx0JyNGRkNFNTYnXG5cdFx0XVxuXHR9XVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1BpZUV4YW1wbGUnLFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPlBpZSBFeGFtcGxlPC9oMj5cbiAgICAgICAgPFBpZSBkYXRhPXtkYXRhfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtQb2xhcn0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcblxuY29uc3QgZGF0YSA9IHtcbiAgZGF0YXNldHM6IFt7XG4gICAgZGF0YTogW1xuICAgICAgMTEsXG4gICAgICAxNixcbiAgICAgIDcsXG4gICAgICAzLFxuICAgICAgMTRcbiAgICBdLFxuICAgIGJhY2tncm91bmRDb2xvcjogW1xuICAgICAgJyNGRjYzODQnLFxuICAgICAgJyM0QkMwQzAnLFxuICAgICAgJyNGRkNFNTYnLFxuICAgICAgJyNFN0U5RUQnLFxuICAgICAgJyMzNkEyRUInXG4gICAgXSxcbiAgICBsYWJlbDogJ015IGRhdGFzZXQnIC8vIGZvciBsZWdlbmRcbiAgfV0sXG4gIGxhYmVsczogW1xuICAgICdSZWQnLFxuICAgICdHcmVlbicsXG4gICAgJ1llbGxvdycsXG4gICAgJ0dyZXknLFxuICAgICdCbHVlJ1xuICBdXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnUG9sYXJFeGFtcGxlJyxcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5Qb2xhciBFeGFtcGxlPC9oMj5cbiAgICAgICAgPFBvbGFyIGRhdGE9e2RhdGF9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1JhZGFyfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xuXG5jb25zdCBkYXRhID0ge1xuICBsYWJlbHM6IFsnRWF0aW5nJywgJ0RyaW5raW5nJywgJ1NsZWVwaW5nJywgJ0Rlc2lnbmluZycsICdDb2RpbmcnLCAnQ3ljbGluZycsICdSdW5uaW5nJ10sXG4gIGRhdGFzZXRzOiBbXG4gICAge1xuICAgICAgbGFiZWw6ICdNeSBGaXJzdCBkYXRhc2V0JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMTc5LDE4MSwxOTgsMC4yKScsXG4gICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMTc5LDE4MSwxOTgsMSknLFxuICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDE3OSwxODEsMTk4LDEpJyxcbiAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICcjZmZmJyxcbiAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogJ3JnYmEoMTc5LDE4MSwxOTgsMSknLFxuICAgICAgZGF0YTogWzY1LCA1OSwgOTAsIDgxLCA1NiwgNTUsIDQwXVxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICdNeSBTZWNvbmQgZGF0YXNldCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSw5OSwxMzIsMC4yKScsXG4gICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LDk5LDEzMiwxKScsXG4gICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LDk5LDEzMiwxKScsXG4gICAgICBwb2ludEJvcmRlckNvbG9yOiAnI2ZmZicsXG4gICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSw5OSwxMzIsMSknLFxuICAgICAgZGF0YTogWzI4LCA0OCwgNDAsIDE5LCA5NiwgMjcsIDEwMF1cbiAgICB9XG4gIF1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdSYWRhckV4YW1wbGUnLFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPlJhZGFyIEV4YW1wbGU8L2gyPlxuICAgICAgICA8UmFkYXIgZGF0YT17ZGF0YX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGluZX0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBsYWJlbHM6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5J10sXG4gIGRhdGFzZXRzOiBbXG4gICAge1xuICAgICAgbGFiZWw6ICdNeSBGaXJzdCBkYXRhc2V0JyxcbiAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgbGluZVRlbnNpb246IDAuMSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoNzUsMTkyLDE5MiwwLjQpJyxcbiAgICAgIGJvcmRlckNvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDEpJyxcbiAgICAgIGJvcmRlckNhcFN0eWxlOiAnYnV0dCcsXG4gICAgICBib3JkZXJEYXNoOiBbXSxcbiAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuMCxcbiAgICAgIGJvcmRlckpvaW5TdHlsZTogJ21pdGVyJyxcbiAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICdyZ2JhKDc1LDE5MiwxOTIsMSknLFxuICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDEsXG4gICAgICBwb2ludEhvdmVyUmFkaXVzOiA1LFxuICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogJ3JnYmEoNzUsMTkyLDE5MiwxKScsXG4gICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6ICdyZ2JhKDIyMCwyMjAsMjIwLDEpJyxcbiAgICAgIHBvaW50SG92ZXJCb3JkZXJXaWR0aDogMixcbiAgICAgIHBvaW50UmFkaXVzOiAxLFxuICAgICAgcG9pbnRIaXRSYWRpdXM6IDEwLFxuICAgICAgZGF0YTogWzY1LCA1OSwgODAsIDgxLCA1NiwgNTUsIDQwXVxuICAgIH1cbiAgXVxufTtcblxuXG5cbmNvbnN0IEdyYXBoID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTogJ0dyYXBoJyxcblx0Y29tcG9uZW50V2lsbE1vdW50KCl7XG5cdFx0dGhpcy5zZXRTdGF0ZShpbml0aWFsU3RhdGUpO1xuXHR9LFxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXG5cdFx0dmFyIF90aGlzID0gdGhpcztcblxuXHRcdHNldEludGVydmFsKGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgb2xkRGF0YVNldCA9IF90aGlzLnN0YXRlLmRhdGFzZXRzWzBdO1xuXHRcdFx0dmFyIG5ld0RhdGEgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciB4PTA7IHg8IF90aGlzLnN0YXRlLmxhYmVscy5sZW5ndGg7IHgrKyl7XG5cdFx0XHRcdG5ld0RhdGEucHVzaChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIG5ld0RhdGFTZXQgPSB7XG5cdFx0XHRcdC4uLm9sZERhdGFTZXRcblx0XHRcdH07XG5cblx0XHRcdG5ld0RhdGFTZXQuZGF0YSA9IG5ld0RhdGE7XG5cblx0XHRcdHZhciBuZXdTdGF0ZSA9IHtcblx0XHRcdFx0Li4uaW5pdGlhbFN0YXRlLFxuXHRcdFx0XHRkYXRhc2V0czogW25ld0RhdGFTZXRdXG5cdFx0XHR9O1xuXG5cdFx0XHRfdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG5cdFx0fSwgNTAwMCk7XG5cdH0sXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PExpbmUgZGF0YT17dGhpcy5zdGF0ZX0gLz5cblx0XHQpO1xuXHR9XG59KTtcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1JhbmRvbWl6ZWREYXRhTGluZUV4YW1wbGUnLFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPlJhbmRvbSBBbmltYXRlZCBMaW5lIEV4YW1wbGU8L2gyPlxuIFx0XHQ8R3JhcGggLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U2NhdHRlcn0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcblxuY29uc3QgZGF0YSA9IHtcbiAgbGFiZWxzOiBbJ1NjYXR0ZXInXSxcbiAgZGF0YXNldHM6IFtcbiAgICB7XG4gICAgICBsYWJlbDogJ015IEZpcnN0IGRhdGFzZXQnLFxuICAgICAgZmlsbDogZmFsc2UsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDc1LDE5MiwxOTIsMC40KScsXG4gICAgICBwb2ludEJvcmRlckNvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDEpJyxcbiAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICBwb2ludEJvcmRlcldpZHRoOiAxLFxuICAgICAgcG9pbnRIb3ZlclJhZGl1czogNSxcbiAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDc1LDE5MiwxOTIsMSknLFxuICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiAncmdiYSgyMjAsMjIwLDIyMCwxKScsXG4gICAgICBwb2ludEhvdmVyQm9yZGVyV2lkdGg6IDIsXG4gICAgICBwb2ludFJhZGl1czogMSxcbiAgICAgIHBvaW50SGl0UmFkaXVzOiAxMCxcbiAgICAgIGRhdGE6IFtcbiAgICAgICAgeyB4OiA2NSwgeTogNzUgfSxcbiAgICAgICAgeyB4OiA1OSwgeTogNDkgfSxcbiAgICAgICAgeyB4OiA4MCwgeTogOTAgfSxcbiAgICAgICAgeyB4OiA4MSwgeTogMjkgfSxcbiAgICAgICAgeyB4OiA1NiwgeTogMzYgfSxcbiAgICAgICAgeyB4OiA1NSwgeTogMjUgfSxcbiAgICAgICAgeyB4OiA0MCwgeTogMTggfSxcbiAgICAgIF1cbiAgICB9XG4gIF1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdTY2F0dGVyRXhhbXBsZScsXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+U2NhdHRlciBFeGFtcGxlPC9oMj5cbiAgICAgICAgPFNjYXR0ZXIgZGF0YT17ZGF0YX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgRG91Z2hudXRFeGFtcGxlIGZyb20gJy4vY29tcG9uZW50cy9kb3VnaG51dCc7XG5pbXBvcnQgRHluYW1pY0RvdWdobnV0RXhhbXBsZSBmcm9tICcuL2NvbXBvbmVudHMvZHluYW1pYy1kb3VnaG51dCc7XG5pbXBvcnQgUGllRXhhbXBsZSBmcm9tICcuL2NvbXBvbmVudHMvcGllJztcbmltcG9ydCBMaW5lRXhhbXBsZSBmcm9tICcuL2NvbXBvbmVudHMvbGluZSc7XG5pbXBvcnQgQmFyRXhhbXBsZSBmcm9tICcuL2NvbXBvbmVudHMvYmFyJztcbmltcG9ydCBIb3Jpem9udGFsQmFyRXhhbXBsZSBmcm9tICcuL2NvbXBvbmVudHMvaG9yaXpvbnRhbEJhcic7XG5pbXBvcnQgUmFkYXJFeGFtcGxlIGZyb20gJy4vY29tcG9uZW50cy9yYWRhcic7XG5pbXBvcnQgUG9sYXJFeGFtcGxlIGZyb20gJy4vY29tcG9uZW50cy9wb2xhcic7XG5pbXBvcnQgQnViYmxlRXhhbXBsZSBmcm9tICcuL2NvbXBvbmVudHMvYnViYmxlJztcbmltcG9ydCBTY2F0dGVyRXhhbXBsZSBmcm9tICcuL2NvbXBvbmVudHMvc2NhdHRlcic7XG5pbXBvcnQgTWl4ZWREYXRhRXhhbXBsZSBmcm9tICcuL2NvbXBvbmVudHMvbWl4JztcbmltcG9ydCBSYW5kb21pemVkRGF0YUxpbmVFeGFtcGxlIGZyb20gJy4vY29tcG9uZW50cy9yYW5kb21pemVkTGluZSc7XG5pbXBvcnQgQ3JhenlEYXRhTGluZUV4YW1wbGUgZnJvbSAnLi9jb21wb25lbnRzL2NyYXp5TGluZSc7XG5pbXBvcnQgTGVnZW5kT3B0aW9uc0V4YW1wbGUgZnJvbSAnLi9jb21wb25lbnRzL2xlZ2VuZC1vcHRpb25zJ1xuaW1wb3J0IExlZ2VuZEhhbmRsZXJzRXhhbXBsZSBmcm9tICcuL2NvbXBvbmVudHMvbGVnZW5kLWhhbmRsZXJzJ1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxociAvPlxuXHRcdFx0XHQ8RG91Z2hudXRFeGFtcGxlIC8+XG5cdFx0XHRcdDxociAvPlxuXHRcdFx0XHQ8RHluYW1pY0RvdWdobnV0RXhhbXBsZSAvPlxuXHRcdFx0XHQ8aHIgLz5cblx0XHRcdFx0PFBpZUV4YW1wbGUgLz5cblx0XHRcdFx0PGhyIC8+XG5cdFx0XHRcdDxMaW5lRXhhbXBsZSAvPlxuXHRcdFx0XHQ8aHIgLz5cblx0XHRcdFx0PEJhckV4YW1wbGUgLz5cblx0XHRcdFx0PGhyIC8+XG5cdFx0XHRcdDxIb3Jpem9udGFsQmFyRXhhbXBsZSAvPlxuXHRcdFx0XHQ8aHIgLz5cblx0XHRcdFx0PFJhZGFyRXhhbXBsZSAvPlxuXHRcdFx0XHQ8aHIgLz5cblx0XHRcdFx0PFBvbGFyRXhhbXBsZSAvPlxuXHRcdFx0XHQ8aHIgLz5cblx0XHRcdFx0PEJ1YmJsZUV4YW1wbGUgLz5cblx0XHRcdFx0PGhyIC8+XG5cdFx0XHRcdDxTY2F0dGVyRXhhbXBsZSAvPlxuXHRcdFx0XHQ8aHIgLz5cblx0XHRcdFx0PE1peGVkRGF0YUV4YW1wbGUgLz5cblx0XHRcdFx0PGhyIC8+XG5cdFx0XHRcdDxSYW5kb21pemVkRGF0YUxpbmVFeGFtcGxlIC8+XG5cdFx0XHRcdDxociAvPlxuXHRcdFx0XHQ8Q3JhenlEYXRhTGluZUV4YW1wbGUgLz5cblx0XHRcdFx0PGhyIC8+XG5cdFx0XHRcdDxMZWdlbmRPcHRpb25zRXhhbXBsZSAvPlxuXHRcdFx0XHQ8aHIgLz5cblx0XHRcdFx0PExlZ2VuZEhhbmRsZXJzRXhhbXBsZSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiIsIm1vZHVsZS5leHBvcnRzID1cbi8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG5cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuXG5cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4vKioqKioqLyBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG5cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaCwgcywgdikge1xuICB2YXIgaGkgPSBNYXRoLmZsb29yKGggKiA2KTtcbiAgdmFyIGYgPSBoICogNiAtIGhpO1xuICB2YXIgcCA9IHYgKiAoMSAtIHMpO1xuICB2YXIgcSA9IHYgKiAoMSAtIGYgKiBzKTtcbiAgdmFyIHQgPSB2ICogKDEgLSAoMSAtIGYpICogcyk7XG4gIHZhciByID0gMjU1O1xuICB2YXIgZyA9IDI1NTtcbiAgdmFyIGIgPSAyNTU7XG5cbiAgc3dpdGNoIChoaSkge1xuICAgIGNhc2UgMDpcbiAgICAgIHIgPSB2O2cgPSB0O2IgPSBwO2JyZWFrO1xuICAgIGNhc2UgMTpcbiAgICAgIHIgPSBxO2cgPSB2O2IgPSBwO2JyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHIgPSBwO2cgPSB2O2IgPSB0O2JyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIHIgPSBwO2cgPSBxO2IgPSB2O2JyZWFrO1xuICAgIGNhc2UgNDpcbiAgICAgIHIgPSB0O2cgPSBwO2IgPSB2O2JyZWFrO1xuICAgIGNhc2UgNTpcbiAgICAgIHIgPSB2O2cgPSBwO2IgPSBxO2JyZWFrO1xuICB9XG4gIHJldHVybiBbTWF0aC5mbG9vcihyICogMjU1KSwgTWF0aC5mbG9vcihnICogMjU1KSwgTWF0aC5mbG9vcihiICogMjU1KV07XG59O1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIHBhZEhleCA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHJnYikge1xuICB2YXIgcGFydHMgPSByZ2IubWFwKGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gcGFkSGV4KHZhbC50b1N0cmluZygxNikpO1xuICB9KS5qb2luKCcnKTtcblxuICByZXR1cm4gJyMnICsgcGFydHM7XG59O1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIGhleFdpZHRoID0gMjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIGlmIChzdHIubGVuZ3RoID4gaGV4V2lkdGgpIHJldHVybiBzdHI7XG4gIHJldHVybiBuZXcgQXJyYXkoaGV4V2lkdGggLSBzdHIubGVuZ3RoICsgMSkuam9pbignMCcpICsgc3RyO1xufTtcblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBoc3ZUb1JnYiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgcmdiVG9IZXggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xudmFyIGdvbGRlblJhdGlvID0gMC42MTgwMzM5ODg3NDk4OTU7XG5cbmZ1bmN0aW9uIGdldFJnYigpIHtcbiAgdmFyIGlucHV0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHZhciBodWUgPSBpbnB1dHMuaHVlLFxuICAgICAgc2F0dXJhdGlvbiA9IGlucHV0cy5zYXR1cmF0aW9uLFxuICAgICAgdmFsdWUgPSBpbnB1dHMudmFsdWU7XG5cbiAgaWYgKCFodWUpIGh1ZSA9IE1hdGgucmFuZG9tKCk7XG4gIGh1ZSArPSBnb2xkZW5SYXRpbztcbiAgaHVlICU9IDE7XG5cbiAgaWYgKHR5cGVvZiBzYXR1cmF0aW9uICE9PSAnbnVtYmVyJykgc2F0dXJhdGlvbiA9IDAuNTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicpIHZhbHVlID0gMC45NTtcblxuICByZXR1cm4gaHN2VG9SZ2IoaHVlLCBzYXR1cmF0aW9uLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGdldEhleChvcHRzLCBpbnB1dHMpIHtcbiAgdmFyIHJnYiA9IGdldFJnYihvcHRzLCBpbnB1dHMpO1xuICByZXR1cm4gcmdiVG9IZXgocmdiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRIZXg7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTsiXX0=
