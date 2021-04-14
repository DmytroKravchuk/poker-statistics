import * as TYPES from '../constants';

export const auth = (payload) => {
  return {
    type: TYPES.AUTH,
    payload,
  };
};
