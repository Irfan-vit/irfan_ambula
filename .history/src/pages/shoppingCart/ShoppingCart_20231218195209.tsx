import React from 'react';
import { useContextState } from "../../context/StateContext";
import { itemsData, TypeData } from "../../reducers/cartReducer";
import 

const ShopingCart: React.FC = () => {
    // using context api's state
    const { state, dispatch } = useContextState();

    const getTotalItems = (items: TypeData[] = []): number => {
        return items.length;
    };

    const getSubtotal = (items: TypeData[] = []): number => {
        if (items.length === 0) {
            return 0;
        }
        return items.reduce((total, item) => total + item.price, 0);
    };

    return (
        <div className="shopping-cart-container">
            {/* This section lists all the available items */}
            <section className="items-section">
                <h2>All Items</h2>
                <ul>
                    {itemsData.map((item) => (
                        <li key={item.id} className="item-list-item">
                            {item.name}
                            {/* writing logic for item to be added to cart or if it is already added */}
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
            {/* This section will list all items which are present in the cart */}
            <section className="cart-section">
                <h2>In Cart</h2>
                <ul>
                    {state.cartList.map(item => (
                        <li key={item.id} className="cart-item">
                            {item.name}
                            <button onClick={() => dispatch({
                                type: 'remove',
                                payload: item.id
                            })}>Remove</button>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="totals-section">
                <h4>Total Items In Cart: {getTotalItems(state.cartList)}</h4>
                <h4>Total Price Of Cart Items: {getSubtotal(state.cartList)}</h4>
            </section>
        </div>
    );
};

export default ShopingCart;