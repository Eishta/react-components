import React from 'react';
import PropTypes from "prop-types";

class Button extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    size: PropTypes.string,
    label: PropTypes.string,
    variant: PropTypes.string,
    children: PropTypes.node,
    disabled: PropTypes.bool

  }
  static defaultProps = {
    className: '',
    size: '',
    label: '',
    variant: 'basic',
    disabled: 'false'
  }

  handleClick = (e) => {
    let { onClick, disabled } = this.props;

    if (disabled) return;

    onClick && onClick({ e })
  }
  renderChildren = () => {
    let { label, children } = this.props;
    if (label) return label;
    if (children) return children;
    return 'Button'
  }
  render() {
    const { className, size, variant, disabled } = this.props;
    const _className = `button ${size} ${className} ${variant} ${disabled ? 'disabled' : ''}`;

    return (<div onClick={this.handleClick} className={_className}>
      {this.renderChildren()}
    </div>)
  }
}


export default Button;