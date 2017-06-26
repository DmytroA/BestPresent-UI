import React from 'react';
import { Link } from 'react-router';
import {
  AppBar,
  Drawer,
  Paper,
  Menu,
  MenuItem,
} from 'material-ui';

class UserArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawer: false,
    };
  }

  onDrawer = () => {
    this.setState({
      drawer: !this.state.drawer,
    });
  }

  renderChildren = () => {
    const children = (React.cloneElement(this.props.children,
      {
        onDrawer: this.onDrawer,
      })
    );
    return (<div>
      {children}
    </div>);
  }


  render() {
    return (
      <div>
        <Drawer
          docked={false}
          open={this.state.drawer}
          onRequestChange={(drawer) => this.setState({ drawer })}
          overlayStyle={{ background: 'rgba(224, 224, 224, 0.6)' }}
          width={390}
        >
          <Menu>
            <Paper zDepth={5}>
              <Link to="/hotels" style={{ textDecoration: 'none' }}>
                <MenuItem primaryText="Hotels" />
              </Link>
              <Link to="/countries" style={{ textDecoration: 'none' }}>
                <MenuItem primaryText="Countries" />
              </Link>
            </Paper>
          </Menu>
        </Drawer>
        <div>
          <AppBar
            title="test"
            onLeftIconButtonTouchTap={this.onDrawer}
          />
        </div>
        {this.renderChildren()}
      </div>
    );
  }
}

UserArea.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.arrayOf(React.element),
  ]),
};

export default UserArea;
