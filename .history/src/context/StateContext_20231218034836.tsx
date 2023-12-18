import { createContext } from "react";

const StateContext = createContext()

export function StateProvider({ children }) {
    return (
        <StateContext.Provider value={{
            name: 
        }}>{children}</StateContext.Provider>
    )
}