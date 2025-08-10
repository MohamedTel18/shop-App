import propTypes from "prop-types";
import CartSummary from "../component/cart-summary";
import { useOutletContext } from "react-router-dom";

export default function Cart()
{
    const { cart, removeFromCart } = useOutletContext();
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
