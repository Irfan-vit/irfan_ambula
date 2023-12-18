import { createContext, useContext, useState, ReactNode, useReducer } from "react";
import { initialCartState, cartReducer } from '../reducers/cartReducer'
const StateContext = createContext(undefined)

type TypeReactNode = {
    children: ReactNode
}

function StateProvider({ children }: TypeReactNode) {
    const [state, dispatch] = useReducer(cartReducer, initialCartState)
    return (
        <StateContext.Provider value={{
            state, dispatch
        }}
        >{children}
        </StateContext.Provider>
    )
}

const useContextState = () => useContext(StateContext)

export { StateProvider, useContextState }