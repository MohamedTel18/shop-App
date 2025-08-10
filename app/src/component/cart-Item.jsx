import { useState } from "react";
import propTypes from "prop-types";
import "../styles/component/cart-item.css";

export default function CartItem({ product, addToCart }) {
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        addToCart(product, quantity);
        // Reset quantity after adding to cart
        setQuantity(1);
    };

    return(
        <div className="cart-item">
            <div className="product-img">
                <img src={product.image} alt={product.title} />
            </div>
            
            <div className="product-content">
                <div className="product-overview">
                    <h3>{product.title}</h3>
                    <div className="product-details">
                        <span className="product-category">{product.category}</span>
                        <div className="product-rating">
                            <span className="rating-star">⭐</span>
                            <span>{product.rating.rate} ({product.rating.count})</span>
                        </div>
                    </div>
                </div>
                
                <div className="product-description">
                    <p>{product.description}</p>
                </div>
                
                <div className="product-footer">
                    <div className="product-price">
                        <h4>${product.price}</h4>
                    </div>
                    
                    <div className="buttons">
                        <div className="quantity-control">
                            <button 
                                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                                aria-label="Decrease quantity"
                            >
                                −
                            </button>
                            <span className="quantity-display">{quantity}</span>
                            <button 
                                onClick={() => setQuantity(quantity + 1)}
                                aria-label="Increase quantity"
                            >
                                +
                            </button>
                        </div>
                        
                        <div className="add-to-cart">
                            <button onClick={handleAddToCart}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

CartItem.propTypes = {
    product: propTypes.object.isRequired,
    addToCart: propTypes.func.isRequired,
}