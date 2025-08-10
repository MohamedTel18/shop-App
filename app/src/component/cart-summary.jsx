
export default function CartSummary({ product, removeFromCart }) {
    return (
        <div className="cart-summary">
            <img src={product.image} alt={product.title} />
            <div className="cart-summary-details">
                <h3>{product.title}</h3>
                <p>Price: ${product.price}</p>
                <p>Quantity: {product.quantity}</p>
                <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </div>
        </div>
    );
}