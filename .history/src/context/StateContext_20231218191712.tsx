import { createContext, useContext, useState, ReactNode, useReducer, Dispatch } from 'react';
import { initialCartState, cartReducer,StateType,  } from '../reducers/cartReducer';

type TypeReactNode = {
    children: ReactNode;
};

interface StateContextType {
    state: StateType;
    dispatch: Dispatch<ActionType>;
}

const StateContext = createContext<StateContextType | undefined>(undefined);

function StateProvider({ children }: TypeReactNode) {
    const [state, dispatch] = useReducer(cartReducer, initialCartState);

    return (
        <StateContext.Provider value={{ state, dispatch }}>
            {children}
        </StateContext.Provider>
    );
}

const useContextState = (): StateContextType => {
    const context = useContext(StateContext);
    if (!context) {
        throw new Error('useContextState must be used within a StateProvider');
    }
    return context;
};

export { StateProvider, useContextState };