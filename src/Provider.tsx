import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router';

import { history, store } from './redux/reducers/store'
import App from './App'

const AppProvider = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

export default AppProvider;
