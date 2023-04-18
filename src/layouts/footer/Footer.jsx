import FooterCSS from './Footer.module.css';
import logo from '../../assets/logo-footer.png';
import NavFooter from './NavFooter';

const Footer = ()=>{
    return (
        <footer className={`${FooterCSS.wrapper} container`}>
            <img src={logo} alt="logo" style={{maxWidth: "160px"}}/>
            <NavFooter />
        </footer>
    );
};

export default Footer;