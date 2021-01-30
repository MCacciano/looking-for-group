import { SET_SERVERS, SET_USER } from './types';

const globalContextReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload
      };
    case SET_SERVERS:
      return {
        ...state,
        servers: payload
      };
    default:
      throw new Error('There is no action with that type');
  }
};

export default globalContextReducer;
