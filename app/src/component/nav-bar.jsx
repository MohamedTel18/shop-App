import {Link} from "react-router-dom";
import PropTypes from "prop-types";

export default function nav({ cartCount })
{
    return (
        <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart ({cartCount})</Link>
        </nav>
    )
}

nav.propTypes = {
    cartCount: PropTypes.number.isRequired
}
