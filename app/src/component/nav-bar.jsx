import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/component/nav.css";

export default function Nav({ cartCount })
{
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart ({cartCount})</Link>
        </nav>
    )
}

Nav.propTypes = {
    cartCount: PropTypes.number.isRequired
}
