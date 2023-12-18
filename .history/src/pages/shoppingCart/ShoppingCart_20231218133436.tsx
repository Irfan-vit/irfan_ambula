const itemsData = [
    { id: 'item1', name: 'Laptop', price: 1000 },
    { id: 'item2', name: 'Headphones', price: 50 },
    { id: 'item3', name: 'Mouse', price: 20 },
    { id: 'item4', name: 'Keyboard', price: 30 },
    { id: 'item5', name: 'Monitor', price: 200 },
];
const ShopingCart: React.FC = () => {
    return (
        <>
            <section>
                <h2>All Items</h2>
                <ul>
                    {itemsData.map(item => (
                        <li>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default ShopingCart;