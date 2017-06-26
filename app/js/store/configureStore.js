import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import rootSaga from '../sagas';

const initStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  /* eslint-disable no-underscore-dangle */
  // because of http://zalmoxisus.github.io/redux-devtools-extension/#1.1-basic-store
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable */

  const store = createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(
        sagaMiddleware,
      ),
    ),
  );
  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      /* eslint-disable global-require */
      const next = require('../reducers').default;
      /* eslint-enable global-require */
      store.replaceReducer(next);
    });
  }
  return store;
};

export default initStore();
