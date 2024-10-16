import { useState } from 'react';
import { addProductToCart } from '../services/CartService';

const ProductComponent = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addProductToCart(name, price);
        setName('');
        setPrice(0);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nom du produit"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Prix"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
            />
            <button type="submit">Ajouter au panier</button>
        </form>
    );
};

export default ProductComponent;
