import {useState} from 'react';
import './LoginPage.scss'
import {Link} from "react-router-dom";

const Form = ({title, link, name, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <section className='login__section'>
            <div className='container'>
                <div className='registration__form'>
                <h2 className='registration__section-title'>{title}</h2>
                <p className='registration__section-field'>Введіть електронну пошту</p>
                <input
                    className="registration__section-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                />
                <p className='registration__section-field'>Введіть пароль</p>
                <input
                    className="registration__section-input"
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="password"
                />
                <div className='login__registration-section'>
                    <h4 className='login__registration-title'>{name} </h4>
                    <Link to="/registration" className='login__registration-link'> {link}</Link>
                </div>
                <div>
                    <Link to='/user'>
                    <button
                        className="section__btn-checkout"
                        onClick={() => handleClick(email, pass)}
                    >
                        {title}
                    </button>
                    </Link>
                </div>
                </div>
            </div>
        </section>
    )
}

export {Form}