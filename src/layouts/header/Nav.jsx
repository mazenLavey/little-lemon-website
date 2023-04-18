import { NavLink } from "react-router-dom";
import NavCSS from './styles/Nav.module.css';


const Nav = ()=>{


    return (
            <ul className={NavCSS.nav} role="navigation">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="menu">Menu</NavLink></li>
                <li><NavLink to="reservations">Reservations</NavLink></li>
                <li><NavLink to="order-online">Order Online</NavLink></li>
                <li><NavLink to="login">Login</NavLink></li>
            </ul>
    );
};

export default Nav;