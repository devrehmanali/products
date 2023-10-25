import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { compose, legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import createSagaMiddleware from 'redux-saga';
import saga from '../middleware/RootSaga';
import RootReducer from '../reducers/RootReducer';

const devMode = process.env.REACT_APP_ENV;

const sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware({
    thunk: false,
    immutableCheck: false,
    serializableCheck: false
  }),
  sagaMiddleware
];

const mdw =
  devMode === 'development'
    ? composeWithDevTools(applyMiddleware(...middleware))
    : compose(applyMiddleware(...middleware));

const configureStore = (preloadedState = RootReducer(undefined, {})) => {
  const store = createStore(RootReducer, preloadedState, mdw);

  sagaMiddleware.run(saga);

  return store;
};

export default configureStore();
