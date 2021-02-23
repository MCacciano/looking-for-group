import { createContext, useContext, useReducer } from 'react';

import initialState from './state';
import userContextReducer from './reducer';

const UserStateContext = createContext();
const UserDispatchContext = createContext();

const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userContextReducer, initialState);

    return (
        <UserStateContext.Provider value={state}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserStateContext.Provider>
    );
};

const useUserState = () => {
    const context = useContext(UserStateContext);

    if (context === undefined) {
        throw new Error(
            'useUserState must be used inside of a UserContextProvider'
        );
    }

    return context;
};

const useUserDispatch = () => {
    const context = useContext(UserDispatchContext);

    if (context === undefined) {
        throw new Error(
            'useUserDispatch must be used inside of a UserContextProvider'
        );
    }

    return context;
};

export { UserContextProvider as default, useUserState, useUserDispatch };
