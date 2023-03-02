import { Routes, Route } from 'react-router-dom';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MainPage from './MainPage/MainPage';
import CatalogPage from './CatalogPage/CatalogPage';
import AboutUsPage from './AboutUsPage/AboutUsPage';
import ProductPage from './ProductPage/ProductPage';
import LoginPage from './LoginPage/LoginPage'
import RegistrationPage from './RegistrationPage/RegistrationPage';
import UserPage from './UserPage/UserPage';
import ErrorPage from './Error 404/404ErrorPage';
import UnderConstractionPage from './UnderConstructionPage/UnderConstructionPage';

const App = () => {
    return (
        <>
            <Header/>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/catalog' element={<CatalogPage/>}/>
                    <Route path='/about_us' element={<AboutUsPage/>}/>
                    <Route path='/product/:id' element={<ProductPage/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/registration' element={<RegistrationPage/>}/>
                    <Route path='/user' element={<UserPage/>}/>
                    <Route path='/cart' element={<UnderConstractionPage/>}/>
                    <Route path='/*' element={<ErrorPage/>}/>
                </Routes>
            <Footer/>
        </>
    )
}

export default App;