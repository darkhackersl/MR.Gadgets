const ProductCard = ({ product, addToCart }) => {
    return (
        <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;
