import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavMobileCSS from './styles/NavMobile.module.css';
import burgerMenuIcon from '../../assets/hamburger-menu.svg';

const NavMobile = ()=>{
    const [open, setOpen] = useState(false);

    function handleClick() {
        setOpen(oldStatus => !oldStatus);
    };

    return (
        <nav className={NavMobileCSS.menu__icon}>
                <div onClick={handleClick}>
                    <img src={burgerMenuIcon} alt="menu icon" style={{cursor: "pointer"}}/>
                </div>
                {
                    open &&
                    <>
                    <ul className={NavMobileCSS.nav} onClick={handleClick}>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="menu">Menu</NavLink></li>
                        <li><NavLink to="reservations">Reservations</NavLink></li>
                        <li><NavLink to="order-online">Order Online</NavLink></li>
                        <li><NavLink to="login">Login</NavLink></li>
                    </ul>
                    <div className={NavMobileCSS.overlay} onClick={handleClick}></div>
                    </>
                }
        </nav>
    );
};

export default NavMobile;