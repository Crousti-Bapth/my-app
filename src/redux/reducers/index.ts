import { connectRouter, RouterState } from 'connected-react-router';
import { combineReducers } from 'redux';

import localeReducer from './localeReducer';

const defaultReducers = {
  locale: localeReducer
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (history: any) => {
  return (
    combineReducers({
      ...defaultReducers,
      router: connectRouter(history)
    })
  );
}

const rootReducer = combineReducers(defaultReducers);

export type StateType = ReturnType<typeof rootReducer & { router: RouterState }>;
