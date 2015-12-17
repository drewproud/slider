require('rc-slider/assets/index.less');

const React = require('react');
const ReactDOM = require('react-dom');
const Slider = require('rc-slider-fork');

const style = {width: 400, margin: 50};
const marks = {
  '-10': '-10°C',
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: '100°C',
};

function log(value) {
  console.log(value);
}

ReactDOM.render(
  <div>
    <div style={style}>
      <p>Slider with marks, `step=null`</p>
      <Slider min={-10} marks={marks} step={null} onChange={log} defaultValue={20} />
    </div>
    <div style={style}>
      <p>Slider with marks and steps</p>
      <Slider min={-10} marks={marks} step={10} onChange={log} defaultValue={20} />
    </div>

    <div style={style}>
      <p>Slider with marks, `included=false`</p>
      <Slider min={-10} marks={marks} included={false} defaultValue={20} />
    </div>
    <div style={style}>
      <p>Slider with marks and steps, `included=false`</p>
      <Slider min={-10} marks={marks} step={10} included={false} defaultValue={20} />
    </div>

    <div style={style}>
      <p>Range with marks</p>
      <Slider min={-10} range marks={marks} onChange={log} defaultValue={[20, 40]} />
    </div>
    <div style={style}>
      <p>Range with marks and steps</p>
      <Slider min={-10} range marks={marks} step={10} onChange={log} defaultValue={[20, 40]} />
    </div>
  </div>
  , document.getElementById('__react-content'));
