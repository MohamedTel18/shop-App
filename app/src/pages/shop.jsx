import { useState, useEffect } from "react";
import CartItem from "../components/CartItem";

export default function shop({AddToCart}) {
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
                    <CartItem key={product.id} product={product} AddToCart={AddToCart} />
                ))}
            </div>
        </div>
    );
}
