import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../ProductPage.scss'

const Button = ({ onClick }) => {
    return (
        <>
            <button className="add_to_cart_button" onClick={onClick}>
                <FontAwesomeIcon icon={faShoppingCart} />
                <p>Додати в кошик</p>
            </button>
        </>
    )
}

Button.propTypes = {
    onClick: PropTypes.func
};

Button.defaultProps = {
    onClick: null
};

export default Button;