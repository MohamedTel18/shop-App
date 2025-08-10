import {Link} from "react-router-dom";
import PropTypes from "prop-types";

export default function Nav({ cartCount })
{
    return (
        <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart ({cartCount})</Link>
        </nav>
    )
}

Nav.propTypes = {
    cartCount: PropTypes.number.isRequired
}
