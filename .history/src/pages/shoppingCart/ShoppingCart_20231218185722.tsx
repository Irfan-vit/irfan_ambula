import { useReducer } from "react";
import { useContextState } from "../../context/StateContext";
import { itemsData } from "../reducers/cartReducer";

const ShopingCart: React.FC = () => {
    const { state, dispatch } = useContextState()
    // const [state, dispatch] = useReducer(cartReducer, initialCartState)
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