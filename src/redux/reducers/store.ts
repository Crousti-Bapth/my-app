// import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import reducers from '../reducers/index';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'language'
  ]
};
const persistedReducer = persistReducer(persistConfig, reducers(history));

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25
});

export const store: any = createStore(
  persistedReducer,
  {},
  composeEnhancers(
    applyMiddleware(sagaMiddleware, routerMiddleware(history)),  )
);
export const persistor = persistStore(store);
