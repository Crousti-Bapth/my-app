/* eslint-disable import/no-anonymous-default-export */
import { LOCALE_SET_LANGUAGE, ActionTypes } from '../actions/localeActions';

export type State = {
  language: 'fr' | 'en';
};

const initialState: State = {
  language: 'fr'
};

export default function (state: State = initialState, action: ActionTypes | { type: '@@INIT' }): State {
  switch (action.type) {
    case LOCALE_SET_LANGUAGE:
      return {
        ...state,
        language: action.payload.language
      };
    default:
      return state;
  }
}
