import { Link } from "react-router-dom";
import NavFooterCSS from './NavFooter.module.css';


const NavFooter = ()=>{


    return (
        <div>
            <h3>Navigation</h3>
            <ul className={NavFooterCSS.nav} role="navigation">
                <li><Link to="/">Home</Link></li>
                <li><Link to="menu">Menu</Link></li>
                <li><Link to="reservations">Reservations</Link></li>
                <li><Link to="order-online">Order Online</Link></li>
                <li><Link to="login">Login</Link></li>
            </ul>
        </div>
    );
};

export default NavFooter;