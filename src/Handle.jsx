import React from 'react';
import Tooltip from 'rc-tooltip';

export default class Handle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isTooltipVisible: false,
    };
  }

  showTooltip() {
    this.setState({
      isTooltipVisible: true,
    });
  }

  hideTooltip() {
    this.setState({
      isTooltipVisible: false,
    });
  }

  render() {
    const props = this.props;
    const {className, tipTransitionName, tipFormatter, offset, value} = props;
    const {dragging, noTip} = props;

    const style = { left: offset + '%' };

    let handle;
    let isTooltipVisible;

    if (props.alwaysShowTip) {
      handle = <div className={className} style={style} />;
      isTooltipVisible = true;
    } else {
      handle = (<div className={className} style={style}
                      onMouseUp={this.showTooltip.bind(this)}
                      onMouseEnter={this.showTooltip.bind(this)}
                      onMouseLeave={this.hideTooltip.bind(this)}/>);
      isTooltipVisible = isTooltipVisible = dragging || this.state.isTooltipVisible;
    }

    if (noTip) {
      return handle;
    }

    return (<Tooltip
              prefixCls={className.replace('slider-handle', 'tooltip')}
              placement="top"
              visible={isTooltipVisible}
              overlay={<span>{tipFormatter ? tipFormatter(value) : value}</span>}
              delay={0}
              transitionName={tipTransitionName}>
              {handle}
            </Tooltip>);
  }
}

Handle.propTypes = {
  className: React.PropTypes.string,
  offset: React.PropTypes.number,
  tipTransitionName: React.PropTypes.string,
  tipFormatter: React.PropTypes.func,
  value: React.PropTypes.number,
  dragging: React.PropTypes.bool,
  noTip: React.PropTypes.bool,
  alwaysShowTip: React.PropTypes.bool,
};
