import locale from '../../locale';
import * as TYPES from '../constants';

const initState = {
  lang: 'en',
  locale: locale.en,
};

export default function localeReducer(state = initState, { type, payload }) {
  switch (type) {
    case TYPES.CHANGE_LOCALE:
      return {
        ...state,
        lang: payload.lang,
        locale: locale[payload.lang],
      };
    default:
      return state;
  }
}
