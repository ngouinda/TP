import { useState, useEffect } from 'react';
import { getCartTotal } from '../services/CartService';

const CartComponent = () => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        async function fetchTotal() {
            const totalPrice = await getCartTotal();
            setTotal(totalPrice);
        }
        fetchTotal();
    }, []);

    return <div>Total du panier: {total} €</div>;
};

export default CartComponent;
