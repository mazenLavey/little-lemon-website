import FooterCSS from './Footer.module.css';
import logo from '../../assets/logo-footer.png';
import NavFooter from './NavFooter';

const Footer = () => {
    return (
        <footer className={`${FooterCSS.wrapper} container`}>
            <img src={logo} alt="logo" style={{ maxWidth: "160px", filter: "brightness(20)" }} />
            <NavFooter />
            <div>
                <h3>Contact</h3>
                <ul>
                    <li>test street 1, 34500, City, Country</li>
                    <li>+1 213 545 4568</li>
                    <li>example@gmail.com</li>
                </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
                <ul>
                    <li><a href="https://www.instagram.com/" target='_blank' rel='noreferrer'>Instagram</a></li>
                    <li><a href="https://www.facebook.com/" target='_blank' rel='noreferrer'>Facebook</a></li>
                    <li><a href="https://www.twitter.com/" target='_blank' rel='noreferrer'>Twitter</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;