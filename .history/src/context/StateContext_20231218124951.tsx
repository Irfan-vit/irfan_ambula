import { createContext, useContext } from "react";

const StateContext = createContext()

function StateProvider({ children }) {
    const [data, setData] = 
    return (
        <StateContext.Provider value={{
            name: "context"
        }}
        >{children}
        </StateContext.Provider>
    )
}

const useContextState = () => useContext(StateContext)

export { StateProvider, useContextState }