import { useState } from "react";
import propTypes from "prop-types";

export default function CartItem({ product, AddToCart }) {

    const [quantity, setQuantity] = useState(1);

    return(
        <div className="cart-item">
            <div className="product-img">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="product-overview">
                <h3>{product.title}</h3>
                <div className="product-details">
                    <h5>{product.category}</h5>
                    <p>{product.rating.rate}({product.rating.count})</p>
                </div>
            </div>
            <div className="product-description">
                <p>{product.description}</p>
            </div>
            <div className="product-price">
                <h4>${product.price}</h4>
                <div className="quantity-control">
                    <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
            </div>
            <div className="add-to-cart">
                <button onClick={() => AddToCart(product, quantity)}>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

CartItem.propTypes = {
    product: propTypes.object.isRequired,
    AddToCart: propTypes.func.isRequired,
}