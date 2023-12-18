import { useReducer } from "react";

const itemsData = [
    { id: 'item1', name: 'Laptop', price: 1000, },
    { id: 'item2', name: 'Headphones', price: 50 },
    { id: 'item3', name: 'Mouse', price: 20 },
    { id: 'item4', name: 'Keyboard', price: 30 },
    { id: 'item5', name: 'Monitor', price: 200 },
];
const initialCartState = {
    cartList: []
}

function cartReducer(state = initialCartState, action) {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                cartList: [...state.cartList, action.payload]
            }
            break;

        case 'remove':

            break;

        default:
            break;
    }
}
const ShopingCart: React.FC = () => {
    const [state, dispatch] = useReducer(cartReducer, initialCartState)
    return (
        <>
            <section>
                <h2>All Items</h2>
                <ul>
                    {itemsData.map(item => (
                        <li>
                            {item.name}
                            {state.cartList.some(newItem =>
                                itemsData.map(existingItem => existingItem.id).includes(newItem.id)
                            ) 
                            ? 
                            <button disabled>added</button> 
                            :
                                <button onClick={() => dispatch({
                                    type: 'add',
                                    payload: { ...item }
                                })}>add</button>}

                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>In Cart</h2>
                {state.cartList.map(item => (
                    <li>
                        {item.name}
                        <button onClick={() => console.log("added")}>add</button>
                        <button onClick={() => console.log("asas")}>added</button>
                    </li>
                ))}
            </section>
        </>
    )
}

export default ShopingCart;