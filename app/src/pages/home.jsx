
import { Link } from "react-router-dom";
import "../styles/pages/home.css";

export default function Home() {
    return (
        <div className="home">
            <div className="hero-section">
                <h1 className="hero-title">Welcome to ShopHub</h1>
                <p className="hero-subtitle">
                    Discover amazing products at unbeatable prices. From electronics to fashion, 
                    we have everything you need in one convenient place.
                </p>
                <Link to="/shop" className="hero-cta">
                    🛍️ Start Shopping
                </Link>
            </div>
            
            <div className="features">
                <div className="feature-card">
                    <div className="feature-icon">🚀</div>
                    <h3 className="feature-title">Fast Delivery</h3>
                    <p className="feature-description">
                        Get your orders delivered quickly with our express shipping options.
                    </p>
                </div>
                
                <div className="feature-card">
                    <div className="feature-icon">💎</div>
                    <h3 className="feature-title">Quality Products</h3>
                    <p className="feature-description">
                        We carefully curate our selection to ensure you get the best quality items.
                    </p>
                </div>
                
                <div className="feature-card">
                    <div className="feature-icon">🛡️</div>
                    <h3 className="feature-title">Secure Shopping</h3>
                    <p className="feature-description">
                        Shop with confidence knowing your personal information is always protected.
                    </p>
                </div>
            </div>
        </div>
    );
}