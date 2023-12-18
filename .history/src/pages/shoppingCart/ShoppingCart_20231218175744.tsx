import { useReducer } from "react";

type TypeData = {
    id: string,
    name: string,
    price: number
}

type ActionType = {
    type: string,
    payload: string | number | TypeData
}

interface StateType {
    cartList: TypeData[]
}

interface Reducertype { (state: StateType, action: ActionType): StateType }

const itemsData: TypeData[] = [
    { id: 'item1', name: 'Laptop', price: 1000, },
    { id: 'item2', name: 'Headphones', price: 50 },
    { id: 'item3', name: 'Mouse', price: 20 },
    { id: 'item4', name: 'Keyboard', price: 30 },
    { id: 'item5', name: 'Monitor', price: 200 },
];
const initialCartState = {
    cartList: [{ id: 'item4', name: 'Keyboard', price: 30 },]
}

// const cartReducer: Reducertype = (state = initialCartState, action) => {
//     switch (action.type) {
//         case 'add':
//             return {
//                 ...state,
//                 cartList: [...state.cartList, action.payload]
//             }

//         case 'remove':
//             return {
//                 ...state,
//                 cartList: state.cartList.filter(item => item.id !== action.payload)
//             }

//         default:
//             break;
//     }
// }
const ShopingCart: React.FC = () => {
    const [state, dispatch] = useReducer(cartReducer, initialCartState)
    return (
        <>
            <section>
                <h2>All Items</h2>
                <ul>
                    {itemsData.map((item) => (
                        <li key={item.id}>
                            {item.name}
                            {state.cartList.some((dataItem) => dataItem.id === item.id) ? (
                                <button disabled>Added</button>
                            ) : (
                                <button
                                    onClick={() =>
                                        dispatch({
                                            type: 'add',
                                            payload: { ...item },
                                        })
                                    }
                                >
                                    Add
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>In Cart</h2>
                {state.cartList.map(item => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => dispatch({
                            type: 'remove',
                            payload: item.id
                        })}>remove</button>
                    </li>
                ))}
            </section>
        </>
    )
}

export default ShopingCart;