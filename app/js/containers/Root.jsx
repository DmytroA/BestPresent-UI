import React, { PureComponent, PropTypes } from 'react';

class Root extends PureComponent {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

Root.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(React.element),
  ]),
};

export default Root;
