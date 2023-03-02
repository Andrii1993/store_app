import React, { useState, useEffect } from 'react';
import './ProductSection.scss';
import { Link } from 'react-router-dom';

const ProductSection = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/productBase.json');
            const data = await response.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    const popularProducts = products.slice(0, 4);

    return (
        <div className='container '>
            <div className="product_nav">
                <h1>Популярні</h1>
                <Link to='/catalog'>
                    <button>VIEW ALL</button>
                </Link>

            </div>
            <Link to='/product/:id' >
                <div className="product">
                    {popularProducts.map((product) => (
                        <div key={product.id} className='container-card'>
                            <img src={product.imgURL} alt={product.productName} className='container-image'/>
                            <h2 className='card__title'>{product.productName}</h2>
                            <p className="card-price">Price: ${product.price}</p>
                        </div>
                    ))}
                </div>
            </Link>
        </div>
    );
};

export default ProductSection;
