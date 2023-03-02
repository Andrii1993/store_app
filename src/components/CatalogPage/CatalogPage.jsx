import React, { useState, useEffect } from 'react';
import './CatalogPage.scss'
import { Link } from "react-router-dom"

const CatalogPage = () => {
    const [products, setProducts] = useState([]);
    const [sortType, setSortType] = useState('lowToHigh');

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/productBase.json');
            const data = await response.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    const sortProducts = (type) => {
        const sorted = [...products].sort((a, b) => {
            if (type === 'lowToHigh') {
                return a.price - b.price;
            } else if (type === 'highToLow') {
                return b.price - a.price;
            } else if (type === 'popular') {
                return b.popularity - a.popularity;
            }
        });
        setProducts(sorted);
    };

    useEffect(() => {
        sortProducts(sortType);
    }, [sortType]);

    return (
        <div className='container '>
            <div className='sort'>
                <label className="sort_title">Сортування: </label>
                <select value={sortType} onChange={(e) => setSortType(e.target.value)} className="sort_product">
                    <option value='lowToHigh'>Ціна: від нижчої до вищої</option>
                    <option value='highToLow'>Ціна: від вищої до нижчої</option>
                    <option value='popular'>Популярне</option>
                </select>
            </div>
            <Link to='/product/:id'>
            <div className="product">
                {products.map((product) => (
                    <div key={product.id} className='container-card'>
                        <img src={product.imgURL} alt={product.productName} className='container-image'/>
                        <h2 className='card__title'>{product.productName}</h2>
                        <p className="card-price">Ціна: {product.price} грн</p>
                    </div>
                ))}
            </div>
            </Link>
        </div>
    );
}

export default CatalogPage;
