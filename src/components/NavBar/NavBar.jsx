import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    const imgMaxClean =
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/186/268/themes/common/logo-263289146-1620170039-010292c8461545a943dfbca1663e417f1620170040-480-0.png?0";
    return (
        <header>
            <Link to={"/"}>
                <img
                    className="imgMaxClean"
                    src={imgMaxClean}
                    alt="Logo MaxClean"
                />
            </Link>
            <ul>
                <li>
                    <NavLink to={`/categoria/2`}>Ambiente</NavLink>
                </li>

                <li>
                    <NavLink to={`/categoria/3`}>Productos</NavLink>
                </li>
            </ul>
            <CartWidget />
        </header>
    );
};

export default NavBar;
