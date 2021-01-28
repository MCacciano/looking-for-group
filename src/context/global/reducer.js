import { SET_USER, SET_ALL_VILLAGERS } from './types';

const globalContextReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload
      };
    default:
      throw new Error('There is no action with that type');
  }
};

export default globalContextReducer;
