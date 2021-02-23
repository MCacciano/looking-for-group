import { createContext, useContext, useReducer } from 'react';

import initialState from './state';
import globalContextReducer from './reducer';

const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(globalContextReducer, initialState);

    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    );
};

const useGlobalState = () => {
    const context = useContext(GlobalStateContext);

    if (context === null) {
        throw new Error(
            'useGlobalState must be used within a GlobalContextProvider'
        );
    }

    return context;
};

const useGlobalDispatch = () => {
    const context = useContext(GlobalDispatchContext);

    if (context === null) {
        throw new Error(
            'useGlobalDispatch must be used within a GlobalContextProvider'
        );
    }

    return context;
};

export { GlobalContextProvider as default, useGlobalState, useGlobalDispatch };
