import * as TYPES from '../constants';

const initialState = {
  authData: null,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.AUTH: {
      localStorage.setItem('profile', JSON.stringify({ ...payload }));
      return {
        ...state,
        authData: payload,
      };
    }
    case TYPES.LOGOUT:
      localStorage.clear();
      return {
        ...state,
        authData: null,
      };
    default:
      return state;
  }
};
