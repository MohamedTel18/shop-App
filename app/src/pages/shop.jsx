import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import CartItem from "../component/cart-Item";
import "../styles/pages/shop.css";

export default function Shop() {
    const { addToCart } = useOutletContext();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="shop">
                <div className="loading-container">
                    <div className="spinner"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="shop">
            <div className="shop-header">
                <h2>Our Products</h2>
                <p className="shop-subtitle">
                    Discover our carefully curated collection of high-quality products
                </p>
            </div>
            
            {products.length === 0 ? (
                <div className="no-products">
                    <p>No products available at the moment.</p>
                </div>
            ) : (
                <div className="product-list">
                    {products.map(product => (
                        <CartItem key={product.id} product={product} addToCart={addToCart} />
                    ))}
                </div>
            )}
        </div>
    );
}
