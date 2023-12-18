import { createContext } from "react";

const StateContext = createContext()

export function StateProvider({ children }) {
    return (
        <StateContext.Provider value={{
            name: "context"
        }}
        >{children}
        </StateContext.Provider>
    )
}

const useS
