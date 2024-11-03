import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cart, removeFromCart } = useCart();

    const handleCheckout = async () => {
        const response = await fetch('/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ items: cart }),
        });

        const session = await response.json();
        const stripe = await getStripe(); // Ensure you have the getStripe function implemented
        await stripe.redirectToCheckout({ sessionId: session.id });
    };

    return (
        <div>
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            {item.name} - ${item.price}
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            {cart.length > 0 && (
                <button onClick={handleCheckout}>Checkout</button>
            )}
        </div>
    );
};

export default Cart;
