import {removeUser, setUser} from '../../store/slices/userSlice';
import { useDispatch } from 'react-redux';
import './UserPage.scss';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate, Link} from "react-router-dom";

const UserPage = () => {
    const dispatch = useDispatch();
    const {push} = useNavigate();
    const handleLogout = (storage, email) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email)
            .then(({user}) => {
                console.log(user);
                dispatch(removeUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                push('/login');
            })
            .catch(() => alert('Вихід успіщний!'));
    }

    return (
        <div>
            <div className="container">
                <div className="registration__form-user">
                    <p className="registration__section-title">
                        Сторінка користувача у розробці
                    </p>
                    <Link to='/login'></Link>
                    <button className="section__btn-checkout" onClick={handleLogout}>
                        ВИХІД
                    </button>
                </div>
                <img
                    src="img/UnderConstruction/under-construction-illustration.svg"
                    alt="UnderConstruction"
                />
            </div>
        </div>
    );
};

export default UserPage;
