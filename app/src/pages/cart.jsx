import { Link } from "react-router-dom";
import CartSummary from "../component/cart-summary";
import { useOutletContext } from "react-router-dom";
import "../styles/pages/cart.css";

export default function Cart() {
    const { cart, removeFromCart } = useOutletContext();
    
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08; // 8% tax
    const shipping = subtotal > 50 ? 0 : 9.99; // Free shipping over $50
    const total = subtotal + tax + shipping;

    if (cart.length === 0) {
        return (
            <div className="cart">
                <div className="cart-header">
                    <h2>Shopping Cart</h2>
                    <p className="cart-subtitle">Review your items before checkout</p>
                </div>
                
                <div className="cart-empty">
                    <div className="cart-empty-icon">🛒</div>
                    <h3>Your cart is empty</h3>
                    <p>Looks like you haven't added anything to your cart yet.</p>
                    <Link to="/shop" className="btn btn-primary">
                        Start Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="cart">
            <div className="cart-header">
                <h2>Shopping Cart</h2>
                <p className="cart-subtitle">
                    {cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart
                </p>
            </div>
            
            <div className="cart-items">
                {cart.map(product => (
                    <CartSummary 
                        key={product.id} 
                        product={product} 
                        removeFromCart={removeFromCart} 
                    />
                ))}
            </div>
            
            <div className="cart-total">
                <h3 className="cart-total-header">Order Summary</h3>
                
                <div className="cart-total-row">
                    <span className="cart-total-label">Subtotal:</span>
                    <span className="cart-total-value">${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="cart-total-row">
                    <span className="cart-total-label">Tax:</span>
                    <span className="cart-total-value">${tax.toFixed(2)}</span>
                </div>
                
                <div className="cart-total-row">
                    <span className="cart-total-label">Shipping:</span>
                    <span className="cart-total-value">
                        {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                    </span>
                </div>
                
                <div className="cart-total-row">
                    <span className="cart-total-label">Total:</span>
                    <span className="cart-total-value cart-total-final">${total.toFixed(2)}</span>
                </div>
                
                <div className="checkout-section">
                    <button className="checkout-btn">
                        Proceed to Checkout
                    </button>
                    <p style={{ marginTop: '1rem', color: '#64748b', fontSize: '0.875rem' }}>
                        Secure checkout powered by SSL encryption
                    </p>
                </div>
            </div>
        </div>
    );
}
