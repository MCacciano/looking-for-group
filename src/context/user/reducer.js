import { SET_USER } from './types';

const userContextReducer = (state, { type, payload }) => {
    switch (type) {
        case SET_USER:
            return {
                ...state,
                user: payload,
            };
        default:
            throw new Error('There is no action with that type');
    }
};

export default userContextReducer;
