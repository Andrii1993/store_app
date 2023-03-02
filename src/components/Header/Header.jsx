import './style.scss';
import {Link} from 'react-router-dom';
import { useState, useContext } from 'react';

import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
    const [menu_class, setMenuClass] = useState("menu hidden");
    const [isMenuCliked, setIsMenuClicked] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    // const dispatch = useDispatch();

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const updateMenu = () => {
        if (!isMenuCliked) {
            setBurgerClass("burger-bar clicked");
            setMenuClass("menu visible");
        } else {
            setBurgerClass("burger-bar unclicked");
            setMenuClass("menu hidden");
        }
        setIsMenuClicked(!isMenuCliked);
    };

    return (
        <div className="header">
            <div className="container">
                <div className="header_container">
                    <div className="header_logo">
                        <Link to="/">
                            <p className="logo_nav">Авто</p>
                            <p className="logo_navi">Магаз</p>
                        </Link>
                    </div>
                    <ul className="header__nav">
                        <Link to="/catalog">
                            <li className="nav__list">Каталог товарів</li>
                        </Link>
                        <Link to="/about_us">
                            <li className="nav__list">Про нас</li>
                        </Link>
                    </ul>
                    <div className={menu_class}>
                        <ul className=".header-nav-mobil__menu-wrap">
                            <li className="header-nav-mobil">
                                <Link to="/catalog" className="header-nav-mobil__menu_item">
                                    Каталог товарів
                                </Link>
                            </li>
                            <li className="header-nav-mobil">
                                <Link to="/about_us" className="header-nav-mobil__menu_item">
                                    Про нас
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Link to="/login">
                            <AssignmentIndIcon className="icon"/>
                        </Link>
                        <Link to="/cart">
                                <ShoppingCartIcon className="icon header_icon"/>
                        </Link>
                    </div>
                <nav className="nav">
                    <div className="burger-menu" onClick={updateMenu}>
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                    </div>
                </nav>
                </div>
            </div>
        </div>
    )
}


export default Header;