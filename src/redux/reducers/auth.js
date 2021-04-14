import * as TYPES from '../constants';

const initialState = {
  profileObj: {},
  token: null,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.AUTH:
      return {
        ...state,
        profileObj: payload.profileObj,
        token: payload.tokenId,
      };
    default:
      return state;
  }
};
