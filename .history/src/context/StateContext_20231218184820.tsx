import { createContext, useContext, useState, ReactNode } from "react";

const StateContext = createContext(undefined)

type TypeReactNode = {
    children: ReactNode
}

const itemsData: TypeData[] = [
    { id: 'item1', name: 'Laptop', price: 1000, },
    { id: 'item2', name: 'Headphones', price: 50 },
    { id: 'item3', name: 'Mouse', price: 20 },
    { id: 'item4', name: 'Keyboard', price: 30 },
    { id: 'item5', name: 'Monitor', price: 200 },
];

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