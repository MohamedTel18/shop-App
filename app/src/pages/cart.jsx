import propTypes from "prop-types";
import CartSummary from "../components/CartSummary";

export default function Cart({cart, removeFromCart})
{
    return (
        <div className="cart">
            {cart.map(product => (
                <CartSummary key={product.id} product={product} removeFromCart={removeFromCart} />
            ))}
        </div>
    );
}

Cart.propTypes = {
    cart: propTypes.array.isRequired,
    removeFromCart: propTypes.func.isRequired
};
