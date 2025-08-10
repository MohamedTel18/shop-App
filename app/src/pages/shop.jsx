import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import CartItem from "../component/cart-Item";

export default function Shop() {
    const { addToCart } = useOutletContext();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    return (
        <div className="shop">
            <h2>Shop</h2>
            <div className="product-list">
                {products.map(product => (
                    <CartItem key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
}
