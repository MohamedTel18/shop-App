
import PropTypes from "prop-types";
import "../styles/component/cart-summary.css";

export default function CartSummary({ product, removeFromCart }) {
    const itemTotal = (product.price * product.quantity).toFixed(2);
    
    return (
        <div className="cart-summary">
            <img src={product.image} alt={product.title} />
            <div className="cart-summary-details">
                <h3>{product.title}</h3>
                <div className="cart-item-info">
                    <span className="cart-item-price">${product.price}</span>
                    <span className="cart-item-quantity">Qty: {product.quantity}</span>
                </div>
                <div className="cart-item-total">
                    Total: ${itemTotal}
                </div>
                <button onClick={() => removeFromCart(product.id)}>
                    Remove from Cart
                </button>
            </div>
        </div>
    );
}

CartSummary.propTypes = {
    product: PropTypes.object.isRequired,
    removeFromCart: PropTypes.func.isRequired,
};