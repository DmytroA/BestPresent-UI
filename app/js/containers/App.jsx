import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from '../store/configureStore';

const App = ({ children }) => (
  <MuiThemeProvider>
    <Provider store={store}>
      <div style={{ height: '100%' }}>
        {children}
      </div>
    </Provider>
  </MuiThemeProvider>
);

App.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.arrayOf(React.element),
  ]),
};

export default App;
