import './style.scss';
import CopyrightIcon from '@mui/icons-material/Copyright';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-container">
                    <div className="footer_logo">
                        <p className="logo_nav">Авто</p>
                        <p className="logo_navi">Магаз</p>
                    </div>
                    <h2 className="footer_title"><CopyrightIcon/>Created by ReactJS</h2>
                    <div>
                        <a href="https://www.instagram.com/"><InstagramIcon/></a>
                        <a href="https://web.telegram.org/k/" ><TelegramIcon className="footer_media"/></a>
                        <a href="https://www.facebook.com/" ><FacebookIcon className="footer_media"/></a>
                        <a href="tel:555-555-5555" ><PhonelinkRingIcon className="footer_media"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;