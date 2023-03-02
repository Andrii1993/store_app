import {useDispatch} from 'react-redux';
import {useNavigate, Link} from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {Form} from './Form';
import {setUser} from 'store/slices/userSlice';

const LoginPage = () => {
    const dispatch = useDispatch();
    const {push} = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                push('/user');
            })
            .catch(() => alert('Користувача не існує! Пройдіть реєстрацію!'));

    }

    return (
        <>
            <Form
                title="ВХІД"
                handleClick={handleLogin}
                link='Зареєструйтесь'
                name='Немає акаунту?'
            />

        </>
    )
}

export default LoginPage;