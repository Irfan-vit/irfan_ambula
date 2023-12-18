import { createContext, useContext, useState, ReactNode } from "react";

const StateContext = createContext(undefined)

type TypeReactNode = {
    children: ReactNode
}

function StateProvider({ children }: TypeReactNode) {
    const [data, setData] = useState(0)
    return (
        <StateContext.Provider value={{
            name: "context",
            data,
            setData
        }}
        >{children}
        </StateContext.Provider>
    )
}

const useContextState = () => useContext(StateContext)

export { StateProvider, useContextState }