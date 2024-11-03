import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { useState } from 'react';

const products = [
    { id: 1, name: 'Gadget 1', description: 'Description for Gadget 1' },
    { id: 2, name: 'Gadget 2', description: 'Description for Gadget 2' },
];

const Home = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
        alert(`${product.name} added to cart!`);
    };

    return (
        <div>
            <Navbar />
            <h1>MR Gadgets Store</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
};

export default Home;
