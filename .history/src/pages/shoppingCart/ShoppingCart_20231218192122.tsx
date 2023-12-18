import { useContextState } from "../../context/StateContext";
import { itemsData } from "../../reducers/cartReducer";

const ShopingCart: React.FC = () => {
    const { state, dispatch } = useContextState()
    return (
        <>
            {/* This section lists all the available items */}
            <section>
                <h2>All Items</h2>
                <ul>
                    {itemsData.map((item) => (
                        <li key={item.id}>
                            {item.name}
                            {/* writing logic for item to be added to cart or if it is aleady added */}
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
            {/* This section will list all items which are  */}
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