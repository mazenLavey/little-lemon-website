
import Logo from "./Logo";
import Nav from "./Nav";
import HeaderCSS from './styles/Header.module.css';
import useMedia from '../../hooks/useMedia';
import NavMobile from "./NavMobile";

const Header = ()=>{
    const {isSmallScreen} = useMedia();

    return (
        <header className={`${HeaderCSS.wrapper} container`}>
            <Logo />
            {
                isSmallScreen?
                <NavMobile />
                :
                <Nav />
            }
        </header>
    );
};

export default Header;