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

const cartReducer: Reducertype = (state = initialCartState, action) => {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                cartList: [...state.cartList, action.payload as TypeData]
            };
        case 'remove':
            return {
                ...state,
                cartList: state.cartList.filter(item => item.id !== action.payload as string)
            };
        default:
            return state;
    }
};


export {itemsData, initialCartState, cartReducer}