webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(160);


/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	/* eslint react/no-multi-comp: 0 */
	'use strict';
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-slider/assets/index.less\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(159);
	var Slider = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-slider\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var style = { width: 400, margin: 50 };
	
	function log(value) {
	  console.log(value);
	}
	
	var CustomizedRange = React.createClass({
	  displayName: 'CustomizedRange',
	
	  getInitialState: function getInitialState() {
	    return {
	      value: [20, 40]
	    };
	  },
	  onSliderChange: function onSliderChange(value) {
	    log(value);
	    this.setState({
	      value: value
	    });
	  },
	  render: function render() {
	    return React.createElement(Slider, { range: true, value: this.state.value, onChange: this.onSliderChange });
	  }
	});
	
	var DynamicBounds = React.createClass({
	  displayName: 'DynamicBounds',
	
	  getInitialState: function getInitialState() {
	    return {
	      min: 0,
	      max: 100
	    };
	  },
	  onSliderChange: function onSliderChange(value) {
	    log(value);
	  },
	  onMinChange: function onMinChange(e) {
	    this.setState({
	      min: +e.target.value || 0
	    });
	  },
	  onMaxChange: function onMaxChange(e) {
	    this.setState({
	      max: +e.target.value || 100
	    });
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'label',
	        null,
	        'Min: '
	      ),
	      React.createElement('input', { type: 'number', value: this.state.min, onChange: this.onMinChange }),
	      React.createElement('br', null),
	      React.createElement(
	        'label',
	        null,
	        'Max: '
	      ),
	      React.createElement('input', { type: 'number', value: this.state.max, onChange: this.onMaxChange }),
	      React.createElement('br', null),
	      React.createElement('br', null),
	      React.createElement(Slider, { range: true, defaultValue: [20, 50], min: this.state.min, max: this.state.max, onChange: this.onSliderChange })
	    );
	  }
	});
	
	ReactDOM.render(React.createElement(
	  'div',
	  null,
	  React.createElement(
	    'div',
	    { style: style },
	    React.createElement(
	      'p',
	      null,
	      'Basic Range，`allowCross=false`'
	    ),
	    React.createElement(Slider, { range: true, allowCross: false, defaultValue: [0, 20], onChange: log })
	  ),
	  React.createElement(
	    'div',
	    { style: style },
	    React.createElement(
	      'p',
	      null,
	      'Basic Range，`step=20` '
	    ),
	    React.createElement(Slider, { range: true, step: 20, defaultValue: [20, 40], onBeforeChange: log })
	  ),
	  React.createElement(
	    'div',
	    { style: style },
	    React.createElement(
	      'p',
	      null,
	      'Basic Range，`step=20, dots` '
	    ),
	    React.createElement(Slider, { range: true, dots: true, step: 20, defaultValue: [20, 40], onAfterChange: log })
	  ),
	  React.createElement(
	    'div',
	    { style: style },
	    React.createElement(
	      'p',
	      null,
	      'Controlled Range'
	    ),
	    React.createElement(Slider, { range: true, value: [20, 40] })
	  ),
	  React.createElement(
	    'div',
	    { style: style },
	    React.createElement(
	      'p',
	      null,
	      'Customized Range'
	    ),
	    React.createElement(CustomizedRange, null)
	  ),
	  React.createElement(
	    'div',
	    { style: style },
	    React.createElement(
	      'p',
	      null,
	      'Range with dynamic `max` `min`'
	    ),
	    React.createElement(DynamicBounds, null)
	  )
	), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=range.js.map